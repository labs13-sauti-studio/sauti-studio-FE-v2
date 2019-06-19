import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import {
  Divider,
  Container,
  CardActions,
  CardContent,
  Card,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  Button,
  TextField,
  ListSubheader,
  Paper,
  StarBorder,
} from '@material-ui/core'
import {
  loadWorkflow,
  loadWorkflowQuestions,
  addWorkflowQuestion,
  deleteWorkflowQuestion,
  loadQuestionAnswers,
  addQuestionAnswer,
  setActiveQuestionId,
  toggleDeleteQuestionModal,
} from 'actions'
import styled from 'styled-components'
import { palette, spacing, borders } from '@material-ui/system'

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

class WorkflowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question_text: '',
      answer_text: '',
      isHovering: false,
    }
    this.handleMouseHover = this.handleMouseHover.bind(this)
  }

  componentDidMount() {
    this.initialLoad()
  }

  initialLoad = () => {
    const { dispatch, '*': url } = this.props
    const workflow_id = url.replace('workflow/', '')
    dispatch(loadWorkflow(workflow_id))
    dispatch(loadWorkflowQuestions(workflow_id))
  }

  clickedCardQuestion = question_id => {
    const { dispatch } = this.props
    dispatch(setActiveQuestionId(question_id))
    dispatch(loadQuestionAnswers(question_id))
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

  addQuestion = async () => {
    const { question_text } = this.state
    const { dispatch, '*': url } = this.props
    const workflow_id = url.replace('workflow/', '')
    if (question_text === '') return
    this.setState({ question_text: '' })
    dispatch(addWorkflowQuestion(workflow_id, question_text))
  }

  addAnswer = () => {
    const { dispatch, question_id } = this.props
    const { answer_text } = this.state
    dispatch(addQuestionAnswer(answer_text, 1, 1, question_id))
    this.setState({ answer_text: '' })
  }

  handleMouseHover = () => this.setState(this.toggleHoverState)

  toggleHoverState = state => ({ isHovering: !state.isHovering })

  toggleDeleteModal = () => {
    const { dispatch, isDeleteQuestionModalOpen } = this.props
    dispatch(toggleDeleteQuestionModal(!isDeleteQuestionModalOpen))
  }

  deleteQuestion = () => {
    const { dispatch, question_id, id } = this.props
    this.toggleDeleteModal()
    dispatch(deleteWorkflowQuestion(question_id))
    dispatch(loadWorkflowQuestions(id))
  }

  render() {
    const {
      name,
      category,
      question_id,
      questions,
      answers,
      isDeleteQuestionModalOpen,
    } = this.props
    const { question_text, answer_text, isHovering } = this.state
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
              margin="dense"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={this.handleInputChange}
              value={question_text}
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              aria-label="Add"
              onClick={this.addQuestion}
            >
              Add
            </Button>
          </InputWrapper>
        </Container>
        <Container>
          <Grid>
            <div>
              {questions.map((q, i) => (
                <Card
                  key={i}
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}
                  style={{
                    marginBottom: '1rem',
                    border: question_id === q.id ? '1.5px solid #035985' : '',
                  }}
                >
                  <CardContent onClick={() => this.clickedCardQuestion(q.id)}>
                    <Flex>
                      <Typography variant="h5" component="h2">
                        {q.question_text}
                      </Typography>
                    </Flex>
                    <Typography color="textSecondary" gutterBottom>
                      ID: {q.id}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button size="small">Edit</Button>
                    {isHovering && question_id === q.id ? (
                      <Button
                        size="small"
                        color="secondary"
                        onClick={this.toggleDeleteModal}
                      >
                        Delete
                      </Button>
                    ) : null}
                    <Dialog
                      open={isDeleteQuestionModalOpen}
                      onClose={this.toggleDeleteModal}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Delete Question
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure you want to delete this question and all
                          the questions attached to it?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={this.toggleDeleteModal}
                          color="primary"
                        >
                          Cancel
                        </Button>
                        <Button onClick={this.deleteQuestion} color="primary">
                          Delete Question
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </CardActions>
                </Card>
              ))}
            </div>
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
                      margin="dense"
                      variant="outlined"
                      style={{ width: '100%' }}
                      value={answer_text}
                      onChange={this.handleInputChange}
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
  name: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  questions: PropTypes.array,
  question_id: PropTypes.number,
  answers: PropTypes.array,
  isDeleteQuestionModalOpen: PropTypes.bool,
  '*': PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    id: state.workflow.id,
    name: state.workflow.name,
    category: state.workflow.category,
    area_code: state.workflow.area_code,
    questions: state.workflow.questions,
    answers: state.workflow.answers,
    question_id: state.workflow.question_id,
    loadingAnswers: state.workflow.loadingAnswers,
    loadingQuestions: state.workflow.loadingQuestions,
    isDeleteQuestionModalOpen: state.ui.isDeleteQuestionModalOpen,
  }),
  null
)(WorkflowPage)
