/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { Divider, LinearProgress } from '@material-ui/core'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { loadWorkflow, fetchResponses } from 'actions'
import SortableTree from '@/SortableTree'
import DeleteWarningModal from '@/DeleteWarningModal'
import { toggleDeleteModal, toggleResModal } from 'actions/responsesActions'
import AddModal from '@/AddModal'

class WorkflowPage extends Component {
  componentDidMount() {
    const workflow = this.props['*'].replace('workflow/', '')
    this.props.loadWorkflow(workflow)
    this.props.fetchResponses(workflow)
  }

  render() {
    const { category, name, responses, code, loading } = this.props

    return (
      <UserLayout>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {code}
        </Typography>
        <Divider style={{ margin: '1rem 0' }} />
        {loading ? <LinearProgress /> : <SortableTree items={responses} />}
      </UserLayout>
    )
  }
}

export default connect(
  state => ({
    id: state.workflow.id,
    name: state.workflow.name,
    category: state.workflow.category,
    area_code: state.workflow.area_code,
    responses: state.responses.unSaved,
    loaded: state.responses.loaded,
    loading: state.responses.isLoadingResponses,
    isAddEditModalOpen: state.responses.isAddEditModalOpen,
    isDeleteModalOpen: state.responses.isDeleteModalOpen,
    active: state.responses.modal,
  }),
  {
    toggleDeleteModal,
    toggleResModal,
    loadWorkflow,
    fetchResponses,
  }
)(WorkflowPage)

WorkflowPage.propTypes = {
  '*': PropTypes.string.isRequired,
  category: PropTypes.string,
  name: PropTypes.string,
}
