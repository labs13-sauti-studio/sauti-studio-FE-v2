/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { loadWorkflow } from 'state/actions'

class WorkflowPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch, '*': url } = this.props
    const id = url.replace('workflow/', '')
    dispatch(loadWorkflow(id))
  }

  render() {
    const { id, name, category, area_code } = this.props
    return (
      <UserLayout>
        <Typography variant="subtitle1">WORKFLOW</Typography>
        {/* <br /> */}
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{id}</Typography>
        <Typography variant="body1">{category}</Typography>
        <Typography variant="body1">{area_code}</Typography>
      </UserLayout>
    )
  }
}

WorkflowPage.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  id: PropTypes.number,
  area_code: PropTypes.string,
  '*': PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  id: state.workflow.id,
  name: state.workflow.name,
  category: state.workflow.category,
  area_code: state.workflow.area_code,
}))(WorkflowPage)
