/* eslint-disable react/destructuring-assignment */
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
import { loadWorkflow, fetchResponses } from 'actions'
import styled from 'styled-components'
import { palette, spacing, borders } from '@material-ui/system'
import StarBorder from '@material-ui/icons/StarBorder'
import SortableList from '@/sortableList'
import ResponseCard from '@/responseCard'
import { Flex } from '@/utility'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
    const { category, name, questions } = this.props
    const items = this.props.responses.filter(({ owner }) => owner === null)

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
              onClick={() => console.log('add')}
            >
              Add
            </Button>
          </InputWrapper>
        </Container>
        <Container>
          {this.props.isLoadingResponses ? null : (
            <SortableList
              items={items}
              responses={this.props.responses}
              onSortEnd={() => console.log('onSortEnd')}
            />
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

    // isDeleteQuestionModalOpen: state.ui.isDeleteQuestionModalOpen,
    // loadingAnswers: state.workflow.loadingAnswers,
    // loadingQuestions: state.workflow.loadingQuestions,
    // question_id: state.workflow.id,
    // questions: state.workflow.questions,
  }),
  {
    loadWorkflow,
    fetchResponses,
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
