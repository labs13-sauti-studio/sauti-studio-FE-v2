import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { connect } from 'react-redux'
import { loadUserWorkflows, toggleWorkflowModal } from 'state/actions'
import Button from '@material-ui/core/Button'
import AddUserWorkflow from '@/addUserWorkflow'
import UserWorkflows from '@/userWorksflows'

class WorkflowsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(loadUserWorkflows())
  }

  toggleModal = () => {
    const { isAddingNewWorkflow, dispatch } = this.props

    dispatch(toggleWorkflowModal(!isAddingNewWorkflow))
  }

  render() {
    const { toggleModal } = this
    const { workflows } = this.props
    return (
      <UserLayout>
        <Button variant="outlined" color="primary" onClick={toggleModal}>
          Create a new workflow
        </Button>
        <AddUserWorkflow />
        <UserWorkflows workflows={workflows} />
      </UserLayout>
    )
  }
}

WorkflowsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  workflows: PropTypes.array.isRequired,
  isAddingNewWorkflow: PropTypes.bool.isRequired,
}

export default connect(state => ({
  workflows: state.workflows.data,
  isAddingNewWorkflow: state.ui.isAddingNewWorkflow,
}))(WorkflowsPage)
