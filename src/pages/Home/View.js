import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar } from 'antd'
import { getHomeInfoAction } from './actionCreator'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="list">
        <List
          itemLayout="horizontal"
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.pubtime}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }

  componentDidMount () {
    this.getHomeInfo()
  }

  getHomeInfo () {
    if(!this.props.list.length) {
      fetch('/api/index.json')
        .then((res) => res.json())
        .then(this.props.changeList)
        .catch(this.getErrInfoHandler.bind(this))
    }
  }

  getErrInfoHandler () {}
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list
  }
}

const mapDistcherToProps = (dispatch) => {
  return {
    changeList (res) {
      const action = getHomeInfoAction(res.data.list)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDistcherToProps)(Home)