import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { connect } from 'react-redux'
import { loadUserWorkflows, toggleWorkflowModal } from 'actions'
import Button from '@material-ui/core/Button'
import AddUserWorkflow from '@/addUserWorkflow'
import UserWorkflows from '@/userWorksflows'
import InfoPopup from '@/InfoPopup'

class WorkflowsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(loadUserWorkflows())
  }

  toggleResModal = () => {
    const { isAddingNewWorkflow, dispatch } = this.props
    dispatch(toggleWorkflowModal(!isAddingNewWorkflow))
  }

  render() {
    const { toggleResModal } = this
    const { workflows } = this.props
    return (
      <UserLayout>
        <Button variant="outlined" color="primary" onClick={toggleResModal}>
          <InfoPopup
            left="10px"
            style={{ position: 'relative' }}
            popOverText={
              <p>
                Create a workflow allows you to create a flow for your business.
              </p>
            }
          />
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
