/* eslint-disable no-unused-vars */
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
  loadQuestionAnswers,
  addQuestionAnswer,
} from 'actions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  div:first-child {
    /* width: 100%; */
    flex-basis: 50%;
  }
  div:last-child {
    /* width: 100%; */
    flex-basis: 50%;
  }
`

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
    if (question_text === '') return
    dispatch(addWorkflowQuestion(workflow_id, question_text))
  }

  addAnswer = () => {
    const { question_id, dispatch } = this.props
    const { answer_text } = this.state

    dispatch(addQuestionAnswer(answer_text, 1, question_id))
  }

  deleteQuestion = id => {
    const { dispatch } = this.props
    dispatch(deleteWorkflowQuestion(id))
  }

  setActiveQuestion = question_id => {
    const { dispatch } = this.props

    dispatch({ type: 'SET_ACTIVE_QUESTION', payload: question_id })

    dispatch(loadQuestionAnswers(question_id))
  }

  render() {
    const {
      id,
      name,
      category,
      area_code,
      questions,
      answers,
      loadingQuestions,
      loadingAnswers,
    } = this.props
    const { question_text } = this.state
    return (
      <UserLayout>
        <Typography variant="subtitle1">WORKFLOW</Typography>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{id}</Typography>
        <Typography variant="body1">{category}</Typography>
        <Typography variant="body1">{area_code}</Typography>
        <Grid>
          {loadingQuestions ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <QuestionList
              questions={questions}
              deleteQuestion={this.deleteQuestion}
              setActiveQuestion={this.setActiveQuestion}
            />
          )}
          {loadingAnswers ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <List>
              {answers.map((answer, i) => (
                <ListItem key={i}>{answer.answer_text}</ListItem>
              ))}
              <ListItem>
                <Input
                  name="answer_text"
                  type="text"
                  onChange={this.handleChange}
                />
                <Button
                  size="small"
                  type="button"
                  variant="outlined"
                  onClick={this.addAnswer}
                >
                  Add Answer
                </Button>
              </ListItem>
            </List>
          )}
        </Grid>
        <div>
          <AddNewQuestion
            question_text={question_text}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <ResponseList answers={answers} />
      </UserLayout>
    )
  }
}

const ResponseList = ({ answers }) => (
  <List>
    {answers.map((answer, i) => (
      <QuestionOrAnswer key={i} {...answer} />
    ))}
  </List>
)

// { id, answer_text, answer_number, question_text, question_id }
const QuestionOrAnswer = ({
  id,
  answer_text,
  answer_number,
  question_text,
  question_id,
}) => {
  if (answer_text) return <ListItem>{`Answer: ${answer_text}`}</ListItem>
  return <ListItem>{`Question: ${question_text}`}</ListItem>
}

const QuestionList = ({ questions, deleteQuestion, setActiveQuestion }) => (
  <List>
    {questions.map(({ id, question_text, option_number }) => (
      <ListItem
        key={id}
        style={{ outline: '1px solid black' }}
        onClick={() => setActiveQuestion(id)}
      >
        {question_text}
        {option_number}
        <Button
          size="small"
          style={{ marginLeft: '1rem' }}
          type="button"
          onClick={() => deleteQuestion(id)}
        >
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
)

const AddNewQuestion = ({ handleChange, handleSubmit }) => (
  <div>
    <Input name="question_text" type="text" onChange={handleChange} />
    <Button
      size="small"
      type="button"
      variant="outlined"
      onClick={handleSubmit}
    >
      Add Question
    </Button>
  </div>
)

WorkflowPage.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  area_code: PropTypes.string,
  questions: PropTypes.array,
  loadingAnswers: PropTypes.bool.isRequired,
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
  answers: state.workflow.answers,
  question_id: state.workflow.question_id,
  loadingAnswers: state.workflow.loadingAnswers,
  loadingQuestions: state.workflow.loadingQuestions,
}))(WorkflowPage)
