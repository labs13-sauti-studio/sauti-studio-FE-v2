/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { Button, Container, Divider, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { loadWorkflow, fetchResponses } from 'actions'
import SortableList from '@/tree'
import DeleteWarningModal from '@/DeleteWarningModal'
import { toggleDeleteModal } from 'actions/responsesActions'

class WorkflowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const workflow = this.props['*'].replace('workflow/', '')
    this.props.loadWorkflow(workflow)
    this.props.fetchResponses(workflow)
  }

  render() {
    const { category, name, responses } = this.props

    return (
      <UserLayout>
        <DeleteWarningModal
          open={this.props.isDeleteModalOpen}
          title="Delete This Response"
          subtitle="Are you sure?
          This will delete all of the Responses following."
          onClose={this.props.toggleDeleteModal}
        ></DeleteWarningModal>
        <Container>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {category}
          </Typography>
          <Divider style={{ margin: '1rem 0' }} />
        </Container>
        <Container>
          {this.props.isLoadingResponses ? null : (
            <SortableList items={responses} />
          )}
        </Container>
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
    isLoadingResponses: state.responses.isLoadingResponses,
    isDeleteModalOpen: state.responses.isDeleteModalOpen,
  }),
  {
    toggleDeleteModal,
    loadWorkflow,
    fetchResponses,
  }
)(WorkflowPage)

WorkflowPage.propTypes = {
  '*': PropTypes.string.isRequired,
  answers: PropTypes.array,
  category: PropTypes.string,
  dispatch: PropTypes.func,
  id: PropTypes.number,
  isDeleteQuestionModalOpen: PropTypes.bool,
  name: PropTypes.string,
  question_id: PropTypes.number,
  questions: PropTypes.array,
}
