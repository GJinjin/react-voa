import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Menu, Icon } from 'antd'
import store from '../../store/'
import './style.css'
import { getChangeListAction } from './actionCreator'


export default class View extends Component {

	constructor (props) {
		super(props)
		this.state = store.getState()
		store.subscribe(this.storeChangeHandler.bind(this))
	}

	storeChangeHandler () {
		this.setState(store.getState())
	}

	render () {
		return (
			<div className='common'>
				<Row>
			      <Col span={8}>
			      	<img className='common-logo' src={require('../../static/imgs/logo.png')} alt="logo" />
			      </Col>
			      <Col span={16}>
			      	<Menu mode="horizontal">
				        {
				        	this.state.common.list.map((value) => {
				        		return (
				        			<Menu.Item key={value.id}>
								        <Link to={value.link}>
								        	<Icon type="appstore" />{value.title}
								        </Link>
								    </Menu.Item>
								)
				        	})
				        }
				    </Menu>
			      </Col>
			    </Row>
				<div>	
				</div>
			</div>
		)
	}

	componentDidMount () {
		this.getCommonInfo()
	}

	getCommonInfo () {
		fetch('/api/header.json')
			.then((res) => res.json())
			.then(this.getSuccInfoHandler.bind(this))
			.catch(this.getErrInfoHandler.bind(this))
	}

	getSuccInfoHandler (res) {
		var action = getChangeListAction(res.data.list)
		store.dispatch(action)
	}

	getErrInfoHandler () {}
}