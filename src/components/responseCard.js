/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react'
import {
  Divider,
  Container,
  CardActions,
  CardContent,
  Card,
  Typography,
  ListItemIcon,
  ListItemText,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import styled from 'styled-components'
import { clickedCardQuestion, toggleQuestionHover } from 'actions'
import { connect, useSelector } from 'react-redux'
import { DragHandle } from '@/sortableList'
import { Flex } from '@/utility'

const ResponseCard = props => (
  <Card
    // onMouseEnter={() => toggleQuestionHover(!isHoveringQuestion)}
    // onMouseLeave={() => toggleQuestionHover(!isHoveringQuestion)}
    style={{
      marginBottom: '1rem',
      width: '100%',
      // border: question_id === id ? '1.5px solid #035985' : '',
    }}
    // onClick={() => setActiveQuestionId(id)}
  >
    <CardContent onClick={() => clickedCardQuestion(props.id)}>
      <Flex>
        <DragHandle />
        <Typography variant="h5" component="h2">
          {props.text}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Order: {props.order}
        </Typography>
        <CardActions>
          <Button size="small">Edit</Button>
          {/* {isHoveringQuestion && question_id === id ? ( */}
          <Button
            size="small"
            color="secondary"
            onClick={() => console.log(`Delete: ${props.id}`)}
          >
            Delete
          </Button>
          {/* ) : null} */}
        </CardActions>
      </Flex>
    </CardContent>
    <Divider />
  </Card>
)

/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default connect(
  state => ({ isHoveringQuestion: state.ui.isHoveringQuestion }),
  { clickedCardQuestion, toggleQuestionHover }
)(ResponseCard)
// const QuestionCard = ({
