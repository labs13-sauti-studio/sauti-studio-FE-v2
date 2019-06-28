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
import { Flex } from '@/utility'

export const DragHandle = sortableHandle(() => (
  <span style={{ cursor: 'grab' }}>
    <Drag />
  </span>
))

const SortableItem = sortableElement(({ item, index }) => (
  <ResponseCard {...item} index={index} />
))

const SortableContainer = sortableContainer(({ children }) => <>{children}</>)

const SortableList = ({ items, currentItems, onSortEnd }) => {
  console.log(items, currentItems)
  return currentItems.map((item, index) => (
    <SortableContainer onSortEnd={onSortEnd} useDragHandle>
      <SortableItem key={`item-${index}`} index={index} item={item} />
    </SortableContainer>
  ))
}

export default connect(
  null,
  { onSortEnd }
)(SortableList)
