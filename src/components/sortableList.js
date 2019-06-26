/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react'
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import { onSortEnd } from 'actions/responsesActions'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon'
import { Drag } from 'mdi-material-ui'
import ResponseCard from './responseCard'
import { Flex } from '@/utility'

export const DragHandle = sortableHandle(() => (
  <span style={{ cursor: 'grab' }}>
    <Drag />
  </span>
))

const SortableItem = sortableElement(({ item, index }) => (
  <ResponseCard {...item} index={index} />
))

const SortableContainer = sortableContainer(({ children }) => (
  <div>{children}</div>
))

const SortableList = ({ items, onSortEnd }) => {
  console.log(items)
  return (
    <SortableContainer onSortEnd={onSortEnd} useDragHandle>
      {items.map((item, index) => (
        // <Flex align="center" justify="start">
        <SortableItem key={`item-${index}`} index={index} item={item} />
        // </Flex>
      ))}
    </SortableContainer>
  )
}

export default connect(
  null,
  { onSortEnd }
)(SortableList)
