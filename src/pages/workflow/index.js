/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */

import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
  Container,
  CardActions,
  CardContent,
  Card,
  ListItemIcon,
  ListItemText,
  Modal,
  SimpleModal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
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
  setActiveQuestionId,
  toggleDeleteQuestionModal,
  setWorkflowQuestions,
} from 'actions'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Paper from '@material-ui/core/Paper'
import { palette, spacing, borders } from '@material-ui/system'
import StarBorder from '@material-ui/icons/StarBorder'

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
      // answer_number: 1,
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
    this.props.dispatch(setActiveQuestionId(question_id))
    this.props.dispatch(loadQuestionAnswers(question_id))
  }

  shouldShowList = id => this.state.active_question !== id

  addQuestion = () => {
    const { question_text } = this.state
    const { dispatch, '*': url } = this.props
    const workflow_id = url.replace('workflow/', '')
    if (question_text === '') return
    dispatch(addWorkflowQuestion(workflow_id, question_text))
    this.setState({ question_text: '' })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  addAnswer = () => {
    const { question_id, dispatch } = this.props
    const { answer_text } = this.state
    dispatch(addQuestionAnswer(answer_text, 1, 1, question_id))
  }

  handleMouseHover = () => this.setState(this.toggleHoverState)

  toggleHoverState = state => ({ isHovering: !state.isHovering })

  toggleDeleteModal = () =>
    this.props.dispatch(
      toggleDeleteQuestionModal(!this.props.isDeleteQuestionModalOpen)
    )

  deleteQuestion = () => {
    const { dispatch, questions, question_id, id } = this.props
    const remainingQuestions = questions.filter(q => q.id !== question_id)
    this.toggleDeleteModal()
    dispatch(deleteWorkflowQuestion(question_id))
    // dispatch(setWorkflowQuestions(remainingQuestions))
    dispatch(loadWorkflowQuestions(id))
  }

  render() {
    return (
      <UserLayout>
        <Container>
          <Typography variant="h3">{this.props.name}</Typography>
          <Typography variant="h6" color="textSecondary">
            {this.props.category}
          </Typography>
          <Divider style={{ margin: '1rem 0' }} />
          {!this.props.questions || this.props.questions.length < 1 ? (
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
              onClick={this.addQuestion}
            >
              Add
            </Button>
          </InputWrapper>
        </Container>
        <Container>
          <Grid>
            <div>
              {this.props.questions.map((q, i) => (
                <Card
                  key={i}
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}
                  style={{
                    marginBottom: '1rem',
                    border:
                      this.props.question_id === q.id
                        ? '1.5px solid #035985'
                        : '',
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
                    {this.state.isHovering &&
                    this.props.question_id === q.id ? (
                      <Button
                        size="small"
                        color="secondary"
                        onClick={this.toggleDeleteModal}
                      >
                        Delete
                      </Button>
                    ) : null}
                    <Dialog
                      open={this.props.isDeleteQuestionModalOpen}
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
              {this.props.answers.map((a, i) => (
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
  isDeleteQuestionModalOpen: state.ui.isDeleteQuestionModalOpen,
}))(WorkflowPage)

/*
<List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItem button onClick={() => this.clickedCardDropdown(q.id)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {() =>
          this.shouldShowList(q.id) ? <ExpandLess /> : <ExpandMore />
        }
      </ListItem>
      <Collapse
        in={() => this.shouldShowList(q.id)}
        timeout="auto"
        unmountOnExit
      >
        {this.props.answers !== [] ||
          this.props.answers[0].question_id !== q.id ? (
            <List component="div" disablePadding>
              {this.props.answers.map((a, i) => (
                <ListItem key={i} button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={a.answer_text} />
                </ListItem>
              ))}
            </List>
          ) : null}
      </Collapse>
    </List>
    */

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

// class WorkflowPage extends Component {
//   constructor() {
//     super()
//     this.state = { question_text: '' }
//   }

//   componentDidMount() {
//     const { dispatch, '*': url } = this.props
//     const workflow_id = url.replace('workflow/', '')

//     dispatch(loadWorkflow(workflow_id))
//     dispatch(loadWorkflowQuestions(workflow_id))
//   }

//   handleChange = e => this.setState({ [e.target.name]: e.target.value })

//   addQuestion = () => {
//     const { id: workflow_id, dispatch } = this.props
//     const { question_text, answer_text } = this.state

//     if (question_text === '' || answer_text === '') return
//     dispatch(addWorkflowQuestion(workflow_id, question_text))
//     this.setState({ question_text: '' })
//   }

//   addAnswer = () => {
//     const { question_id, dispatch } = this.props
//     const { answer_text } = this.state

//     dispatch(addQuestionAnswer(answer_text, 1, 1, question_id))
//   }

//   deleteQuestion = id => {
//     const { dispatch } = this.props
//     dispatch(deleteWorkflowQuestion(id))
//   }

//   deleteAnswer = id => {
//     const { dispatch } = this.props
//     dispatch(deleteWorkflowAnswer(id))
//   }

//   setActiveQuestion = question_id => {
//     const { dispatch } = this.props

//     dispatch({ type: 'SET_ACTIVE_QUESTION', payload: question_id })

//     dispatch(loadQuestionAnswers(question_id))
//   }

//   render() {
//     const { id, name, category, area_code, questions, answers } = this.props
//     const { question_text } = this.state
//     const { deleteQuestion, deleteAnswer, dispatch } = this
//     return (
//       <UserLayout>
//         <Typography variant="subtitle1">WORKFLOW</Typography>
//         <Typography variant="h3">{name}</Typography>
//         <Typography variant="body1">{id}</Typography>
//         <Typography variant="body1">{category}</Typography>
//         <Typography variant="body1">{area_code}</Typography>
//         <Grid>
//           <List>
//             {questions.map(({ id, question_text }) => (
//               <ListItem key={id} onClick={() => this.setActiveQuestion(id)}>
//                 <Box p={1} borderRadius={1} borderColor="primary" border={1}>
//                   <Typography variant="body1">{question_text}</Typography>
//                   <IconButton
//                     size="small"
//                     aria-label="Delete"
//                     onClick={() => this.deleteQuestion(id)}
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </IconButton>
//                 </Box>
//               </ListItem>
//             ))}
//           </List>

//           <List>
//             <ListItem>
//               <Typography variant="h6">{answers.length}</Typography>
//             </ListItem>
//             {answers.map(({ id, answer_text, question_text }, i) => {
//               if (answer_text)
//                 return (
//                   <ListItem key={i}>
//                     <Box
//                       p={1}
//                       borderRadius={1}
//                       borderColor="primary"
//                       border={1}
//                     >
//                       <Typography variant="body1">{answer_text}</Typography>
//                       <IconButton
//                         size="small"
//                         aria-label="Delete"
//                         onClick={() => this.deleteAnswer(id)}
//                       >
//                         <DeleteIcon fontSize="small" />
//                       </IconButton>
//                     </Box>
//                   </ListItem>
//                 )

//               return (
//                 <ListItem key={i}>
//                   <Box p={1} borderRadius={1} borderColor="primary" border={1}>
//                     <Typography variant="body1">{question_text}</Typography>
//                     <IconButton
//                       size="small"
//                       aria-label="Delete"
//                       onClick={() => deleteQuestion(id)}
//                     >
//                       <DeleteIcon fontSize="small" />
//                     </IconButton>
//                   </Box>
//                 </ListItem>
//               )
//             })}

//             <ListItem>
//               <InputWrapper>
//                 <TextField
//                   id="outlined-name"
//                   label="Answer"
//                   name="answer_text"
//                   onChange={this.handleChange}
//                   margin="normal"
//                   variant="outlined"
//                 />
//                 <Fab
//                   size="small"
//                   color="primary"
//                   aria-label="Add"
//                   onClick={this.addAnswer}
//                 >
//                   <AddIcon />
//                 </Fab>
//               </InputWrapper>
//             </ListItem>
//           </List>
//         </Grid>
//         <div>
//           <InputWrapper>
//             <TextField
//               id="outlined-name"
//               label="Question"
//               name="question_text"
//               onChange={this.handleChange}
//               margin="normal"
//               variant="outlined"
//             />
//             <Fab
//               size="small"
//               color="primary"
//               aria-label="Add"
//               onClick={this.addQuestion}
//             >
//               <AddIcon />
//             </Fab>
//           </InputWrapper>
//           <div></div>
//         </div>
//       </UserLayout>
//     )
//   }
// }

// // { id, answer_text, answer_number, question_text, question_id }
// const QuestionOrAnswer = ({
//   dispatch,
//   id,
//   answer_text,
//   answer_number,
//   question_text,
//   question_id,
//   deleteQuestion,
//   deleteAnswer,
// }) => {
//   if (answer_text)
//     return (
//       <ListItem key={id}>
//         <Box p={1} borderRadius={1} borderColor="primary" border={1}>
//           <Typography variant="body1">{answer_text}</Typography>
//           <IconButton
//             size="small"
//             aria-label="Delete"
//             onClick={() => console.log(dispatch)}
//           >
//             <DeleteIcon fontSize="small" />
//           </IconButton>
//         </Box>
//       </ListItem>
//     )

//   return (
//     <ListItem key={id}>
//       <Box p={1} borderRadius={1} borderColor="primary" border={1}>
//         <Typography variant="body1">{question_text}</Typography>
//         <IconButton
//           size="small"
//           aria-label="Delete"
//           onClick={() => deleteQuestion(id)}
//         >
//           <DeleteIcon fontSize="small" />
//         </IconButton>
//       </Box>
//     </ListItem>
//   )
// }

// const QuestionList = ({ questions, deleteQuestion, setActiveQuestion }) => (
//   <List>
//     {questions.map(({ id, question_text, option_number }) => (
//       <ListItem
//         key={id}
//         style={{ outline: '1px solid black' }}
//         onClick={() => setActiveQuestion(id)}
//       >
//         {question_text}
//         {option_number}
//         <IconButton aria-label="Delete" onClick={() => deleteQuestion(id)}>
//           <DeleteIcon fontSize="small" />
//         </IconButton>
//       </ListItem>
//     ))}
//   </List>
// )
