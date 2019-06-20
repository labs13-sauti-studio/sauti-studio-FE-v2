/* eslint-disable no-shadow */
import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import {
  clickedCardQuestion,
  toggleQuestionHover,
  deleteWorkflowQuestion,
  loadQuestionAnswers,
  addQuestionAnswer,
  setActiveQuestionId,
  toggleDeleteQuestionModal,
} from 'actions'
import arrayMove from 'array-move'
import { connect } from 'react-redux'
import {
  Divider,
  CardActions,
  CardContent,
  Card,
  Typography,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import styled from 'styled-components'
import QuestionCard from './questionCard'

const DragHandle = sortableHandle(() => <span>XXXXX</span>)

const SortableItem = sortableElement(({ value }) => (
  <QuestionCard {...value} DragHandle={DragHandle}></QuestionCard>
))

const SortableContainer = sortableContainer(({ children }) => (
  <div>{children}</div>
))

export default class SortableList extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }))
  }

  render() {
    const { items } = this.props

    return (
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>
    )
  }
}
// import { connect } from 'react-redux'
// import QuestionCard from '@/questionCard'

// const DragHandle = sortableHandle(() => <span>::</span>)

// const SortableItem = sortableElement(({ value }) => (
//   <li>
//     <DragHandle />
//     {value.id}
//   </li>
// ))
// const SortableContainer = sortableContainer(({ children }) => (
//   <ul className="list is-hoverable">{children}</ul>
// ))

// class SortableList extends Component {
//   state = {
//     items: [],
//   }

//   onSortEnd = ({ oldIndex, newIndex }) => {
//     this.setState(({ items }) => ({
//       items: arrayMove(items, oldIndex, newIndex),
//     }))
//   }

//   render() {
//     const { items, children } = this.props

//     return (
//       <SortableContainer onSortEnd={this.onSortEnd}>
//         {/* {JSON.stringify(children)} */}
//         {items.map((value, index) => (
//           <SortableItem key={`item-${index}`} index={index} value={value} />
//         ))}
//       </SortableContainer>
//     )
//   }
// }

// export default SortableList
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
