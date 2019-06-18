/* eslint-disable no-shadow */
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
  deleteWorkflowAnswer,
  loadQuestionAnswers,
  addQuestionAnswer,
} from 'actions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { palette, spacing, borders } from '@material-ui/system'
import NoSsr from '@material-ui/core/NoSsr'
import { axiosInstance } from 'helpers'

const Box = styled.div`
  ${palette}
  ${spacing}
  ${borders}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  button {
    margin-left: 1rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  button {
    margin-left: 1rem;
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

  addQuestion = () => {
    const { id: workflow_id, dispatch } = this.props
    const { question_text, answer_text } = this.state

    if (question_text === '' || answer_text === '') return
    dispatch(addWorkflowQuestion(workflow_id, question_text))
    this.setState({ question_text: '' })
  }

  addAnswer = () => {
    const { question_id, dispatch } = this.props
    const { answer_text } = this.state

    dispatch(addQuestionAnswer(answer_text, 1, 1, question_id))
  }

  deleteQuestion = id => {
    const { dispatch } = this.props
    dispatch(deleteWorkflowQuestion(id))
  }

  deleteAnswer = id => {
    const { dispatch } = this.props
    dispatch(deleteWorkflowAnswer(id))
  }

  setActiveQuestion = question_id => {
    const { dispatch } = this.props

    dispatch({ type: 'SET_ACTIVE_QUESTION', payload: question_id })

    dispatch(loadQuestionAnswers(question_id))
  }

  render() {
    const { id, name, category, area_code, questions, answers } = this.props
    const { question_text } = this.state
    const { deleteQuestion, deleteAnswer, dispatch } = this
    return (
      <UserLayout>
        <Typography variant="subtitle1">WORKFLOW</Typography>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{id}</Typography>
        <Typography variant="body1">{category}</Typography>
        <Typography variant="body1">{area_code}</Typography>
        <Grid>
          <List>
            {questions.map(({ id, question_text }) => (
              <ListItem key={id} onClick={() => this.setActiveQuestion(id)}>
                <Box p={1} borderRadius={1} borderColor="primary" border={1}>
                  <Typography variant="body1">{question_text}</Typography>
                  <IconButton
                    size="small"
                    aria-label="Delete"
                    onClick={() => this.deleteQuestion(id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem>
              <Typography variant="h6">{answers.length}</Typography>
            </ListItem>
            {answers.map(({ id, answer_text, question_text }, i) => {
              if (answer_text)
                return (
                  <ListItem key={i}>
                    <Box
                      p={1}
                      borderRadius={1}
                      borderColor="primary"
                      border={1}
                    >
                      <Typography variant="body1">{answer_text}</Typography>
                      <IconButton
                        size="small"
                        aria-label="Delete"
                        onClick={() => this.deleteAnswer(id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </ListItem>
                )

              return (
                <ListItem key={i}>
                  <Box p={1} borderRadius={1} borderColor="primary" border={1}>
                    <Typography variant="body1">{question_text}</Typography>
                    <IconButton
                      size="small"
                      aria-label="Delete"
                      onClick={() => deleteQuestion(id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </ListItem>
              )
            })}

            <ListItem>
              <InputWrapper>
                <TextField
                  id="outlined-name"
                  label="Answer"
                  name="answer_text"
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <Fab
                  size="small"
                  color="primary"
                  aria-label="Add"
                  onClick={this.addAnswer}
                >
                  <AddIcon />
                </Fab>
              </InputWrapper>
            </ListItem>
          </List>
        </Grid>
        <div>
          <InputWrapper>
            <TextField
              id="outlined-name"
              label="Question"
              name="question_text"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={this.addQuestion}
            >
              <AddIcon />
            </Fab>
          </InputWrapper>
          <div></div>
        </div>
      </UserLayout>
    )
  }
}

// { id, answer_text, answer_number, question_text, question_id }
const QuestionOrAnswer = ({
  dispatch,
  id,
  answer_text,
  answer_number,
  question_text,
  question_id,
  deleteQuestion,
  deleteAnswer,
}) => {
  if (answer_text)
    return (
      <ListItem key={id}>
        <Box p={1} borderRadius={1} borderColor="primary" border={1}>
          <Typography variant="body1">{answer_text}</Typography>
          <IconButton
            size="small"
            aria-label="Delete"
            onClick={() => console.log(dispatch)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </ListItem>
    )

  return (
    <ListItem key={id}>
      <Box p={1} borderRadius={1} borderColor="primary" border={1}>
        <Typography variant="body1">{question_text}</Typography>
        <IconButton
          size="small"
          aria-label="Delete"
          onClick={() => deleteQuestion(id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </ListItem>
  )
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
        <IconButton aria-label="Delete" onClick={() => deleteQuestion(id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItem>
    ))}
  </List>
)

//   < TextField
// id = "outlined-name"
// label = "Name"
// name = "answer_text"
// onChange = { this.handleChange }
// margin = "normal"
// variant = "outlined"
//   />
//   <Fab
//     size="small"
//     color="primary"
//     aria-label="Add"
//     onClick={this.addAnswer}
//   >
//     <AddIcon />
//   </Fab>

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
  // loadingAnswers: PropTypes.bool.isRequired,
  // loadingQuestions: PropTypes.bool.isRequired,
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
