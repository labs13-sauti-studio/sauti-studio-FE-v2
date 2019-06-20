/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import {
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  TextField,
} from '@material-ui/core'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import {
  addQuestionAnswer,
  addWorkflowQuestion,
  addNewQuestion,
  deleteWorkflowQuestion,
  loadQuestionAnswers,
  loadWorkflow,
  loadWorkflowQuestions,
  setActiveQuestionId,
  toggleDeleteQuestionModal,
} from 'actions'
import styled from 'styled-components'
import { palette, spacing, borders } from '@material-ui/system'
import StarBorder from '@material-ui/icons/StarBorder'
import SortableList from '@/sortableList'
import QuestionCard from '@/questionCard'

class WorkflowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question_text: '',
      answer_text: '',
    }
  }

  componentDidMount() {
    this.initialLoad()
  }

  initialLoad = () => {
    const { '*': url, loadWorkflowQuestions, loadWorkflow } = this.props
    const workflow_id = url.replace('workflow/', '')
    loadWorkflow(workflow_id)
  }

  clickedCardQuestion = question_id => {
    const { dispatch } = this.props
    setActiveQuestionId(question_id)
    loadQuestionAnswers(question_id)
  }

  addQuestion = () => {
    const { question_text } = this.state
    const { dispatch, '*': url } = this.props
    const workflow_id = url.replace('workflow/', '')
    if (question_text === '') return
    addWorkflowQuestion(workflow_id, question_text)
    this.setState({ question_text: '' })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  addAnswer = () => {
    const { question_id } = this.props
    const { answer_text } = this.state
    addQuestionAnswer(answer_text, 1, 1, question_id)
  }

  toggleDeleteModal = () => {
    const { isDeleteQuestionModalOpen } = this.props
    toggleDeleteQuestionModal(!isDeleteQuestionModalOpen)
  }

  deleteQuestion = () => {
    const { question_id, id } = this.props
    this.toggleDeleteModal()
    deleteWorkflowQuestion(question_id)
    loadWorkflowQuestions(id)
  }

  render() {
    const {
      answers,
      category,
      isDeleteQuestionModalOpen,
      name,
      question_id,
      questions,
      addNewQuestion,
    } = this.props

    const { question_text } = this.state
    return (
      <UserLayout>
        <Container>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {category}
          </Typography>
          <Divider style={{ margin: '1rem 0' }} />
          {!questions || questions.length < 1 ? (
            <Paper>
              <Box p={2}>
                <Typography variant="h4">Add first question</Typography>
              </Box>
            </Paper>
          ) : null}
        </Container>
        <Container style={{ marginBottom: '1rem' }}>
          <InputWrapper style={{ width: '50%' }}>
            <TextField
              id="outlined-name"
              label="New Question"
              name="question_text"
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
              style={{ width: '100%' }}
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              aria-label="Add"
              onClick={() =>
                addNewQuestion({ question_text, order: questions.length + 1 })
              }
            >
              Add
            </Button>
          </InputWrapper>
        </Container>
        <Container>
          <Grid>
            <SortableList items={questions} />
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <InputWrapper style={{ width: '100%' }}>
                    <TextField
                      id="outlined-name"
                      label="New Answer"
                      name="answer_text"
                      onChange={this.handleChange}
                      margin="dense"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      aria-label="Add"
                      onClick={this.addAnswer}
                    >
                      Add
                    </Button>
                  </InputWrapper>
                </ListSubheader>
              }
            >
              {answers.map((a, i) => (
                <ListItem key={i} button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={a.answer_text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Container>
      </UserLayout>
    )
  }
}
WorkflowPage.propTypes = {
  '*': PropTypes.string.isRequired,
  answers: PropTypes.array,
  category: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number,
  isDeleteQuestionModalOpen: PropTypes.bool,
  name: PropTypes.string,
  question_id: PropTypes.number,
  questions: PropTypes.array,
}

export default connect(
  state => ({
    answers: state.workflow.answers,
    area_code: state.workflow.area_code,
    category: state.workflow.category,
    id: state.workflow.id,
    isDeleteQuestionModalOpen: state.ui.isDeleteQuestionModalOpen,
    loadingAnswers: state.workflow.loadingAnswers,
    loadingQuestions: state.workflow.loadingQuestions,
    name: state.workflow.name,
    question_id: state.workflow.question_id,
    questions: state.workflow.questions,
  }),
  {
    addQuestionAnswer,
    addNewQuestion,
    deleteWorkflowQuestion,
    loadWorkflowQuestions,
    toggleDeleteQuestionModal,
    loadQuestionAnswers,
    setActiveQuestionId,
    loadWorkflow,
  }
)(WorkflowPage)

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
  grid-template-columns: repeat(2, 1fr);
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

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
