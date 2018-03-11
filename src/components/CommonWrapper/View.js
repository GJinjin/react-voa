import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getChangeListAction } from './actionCreator'
import { Row, Col, Menu, Icon } from 'antd'
import './style.css'


class View extends Component {

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
				        	this.props.list.map((value) => {
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
			.then(this.props.changeList)
			.catch(this.getErrInfoHandler.bind(this))
	}

	getErrInfoHandler () {}
}

const mapStateToProps = (state) => {
	return {
		list: state.common.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeList: (res) => {
			var action = getChangeListAction(res.data.list)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(View)