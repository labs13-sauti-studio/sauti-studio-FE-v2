/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import {
  loadWorkflow,
  loadWorkflowQuestions,
  addWorkflowQuestion,
  deleteWorkflowQuestion,
} from 'state/actions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CircularProgress from '@material-ui/core/CircularProgress'

class WorkflowPage extends Component {
  constructor() {
    super()
    this.state = { question_text: '' }
  }

  componentDidMount() {
    const { dispatch, '*': url } = this.props
    const workflow_id = url.replace('workflow/', '')

    dispatch(loadWorkflow(workflow_id))
    dispatch(loadWorkflowQuestions(workflow_id))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = () => {
    const { id: workflow_id, dispatch } = this.props
    const { question_text } = this.state

    dispatch(addWorkflowQuestion(workflow_id, question_text))
  }

  deleteQuestion = id => {
    const { dispatch } = this.props
    dispatch(deleteWorkflowQuestion(id))
  }

  render() {
    const {
      id,
      name,
      category,
      area_code,
      questions,
      loadingQuestions,
    } = this.props
    const { question_text } = this.state
    return (
      <UserLayout>
        <Typography variant="subtitle1">WORKFLOW</Typography>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{id}</Typography>
        <Typography variant="body1">{category}</Typography>
        <Typography variant="body1">{area_code}</Typography>
        {loadingQuestions ? (
          <CircularProgress></CircularProgress>
        ) : (
          <QuestionList
            questions={questions}
            deleteQuestion={this.deleteQuestion}
          />
        )}
        <AddNewQuestion
          question_text={question_text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></AddNewQuestion>
      </UserLayout>
    )
  }
}

const QuestionList = ({ questions, deleteQuestion }) => (
  <List>
    {questions.map(({ question_id, question_text, option_number }, i) => (
      <ListItem key={i}>
        {question_text}
        {option_number}
        <button type="button" onClick={() => deleteQuestion(question_id)}>
          Delete
        </button>
      </ListItem>
    ))}
  </List>
)

const AddNewQuestion = ({ handleChange, handleSubmit }) => (
  <div>
    <input name="question_text" type="text" onChange={handleChange} />
    <button type="button" onClick={handleSubmit}>
      Add Question
    </button>
  </div>
)

WorkflowPage.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  area_code: PropTypes.string,
  questions: PropTypes.array,
  loadingQuestions: PropTypes.bool.isRequired,
  '*': PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  id: state.workflow.id,
  name: state.workflow.name,
  category: state.workflow.category,
  area_code: state.workflow.area_code,
  questions: state.workflow.questions,
  loadingQuestions: state.workflow.loadingQuestions,
}))(WorkflowPage)
