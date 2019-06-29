import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import {
  updateArray,
  clickedResponse,
  toggleResModal,
  toggleDeleteModal,
  setActiveRes,
} from 'actions/responsesActions'
import React, { useState, useEffect } from 'react'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Drag } from 'mdi-material-ui'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Flex } from '@/utility'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { ifItemChildren } from 'helpers'

const getChildCount = item => (item.children ? item.children.length : null)

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary)

export const DragHandle = SortableHandle(() => (
  <Drag style={{ cursor: 'grab', marginRight: '1rem' }} />
))

const SortableItem = SortableElement(props =>
  !props.item.children ? (
    <li>{props.item.text}</li>
  ) : (
    props.item.children.map((child, index) => (
      <SortableComponent
        key={child.id}
        index={index}
        item={child}
        items={child.children}
      />
    ))
  )
)

// const SortableItem = SortableElement(props => (
//   <li>
//     {props.item.text}
//     {props.item.children ? (
//       <ul>
//         {props.children.map((child, index) => (
//           <SortableComponent
//             key={child.id}
//             index={index}
//             item={child}
//             items={child.children}
//           />
//         ))}
//       </ul>
//     ) : null}
//   </li>
// ))

const SortableList = SortableContainer(props => (
  <ul>
    {props.items.map((item, index) => (
      <SortableItem
        key={item.id}
        index={index}
        item={item}
        items={item.children}
      />
    ))}
  </ul>
))

const SortableWrapper = SortableContainer(({ children }) => (
  <div>{children}</div>
))

function SortableComponent(props) {
  const [items, setItems] = useState(props.items)

  return (
    <ul>
      {items.map((item, i) =>
        item.children ? (
          <li key={item.id} index={i}>
            <div>
              <span>{item.text}</span>
              <SortableList
                items={item.children}
                onSortEnd={({ oldIndex, newIndex }) => {
                  setItems([
                    ...props.items,
                    arrayMove(item.children, oldIndex, newIndex),
                  ])
                }}
              />
            </div>
          </li>
        ) : (
          <li key={item.id}>{item.text}</li>
        )
      )}
    </ul>
  )
}

const SortableTree = props => (
  <div>
    {props.loading ? 'loading..' : <SortableComponent items={props.items} />}
  </div>
)

export default connect(
  state => ({
    items: state.responses.unSaved,
    loading: state.responses.isLoadingResponses,
  }),
  { updateArray }
)(SortableTree)
