import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailInfoAction } from './actionCreator' 

class View extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.data} <span> {this.props.source} --- {this.props.count}</span></div>
        <div>{this.props.mp3}</div>
        <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </div>
    )
  }

  componentDidMount () {
    this.getDetailInfo()
  }

  getDetailInfo () {
    fetch('/api/detail.json?id=' + this.props.params.id)
      .then((res) => res.json())
      .then(this.props.changeList)
      .catch(this.getErrInfoHandler.bind(this))
  }

  getErrInfoHandler () {}
}

const mapStateToProps = (state) => ({
  ...state.detail
})

const mapDispatcherToProps = (dispatch) => {
  return {
    changeList(res) {
      var action = getDetailInfoAction(res.data)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(View)
