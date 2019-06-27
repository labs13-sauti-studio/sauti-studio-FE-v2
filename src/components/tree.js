import React, { useState } from 'react'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Drag } from 'mdi-material-ui'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import { onSortEnd, clickedResponse } from 'actions/responsesActions'
import { connect } from 'react-redux'
import { Flex } from '@/utility'

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

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

export const DragHandle = sortableHandle(() => (
  <Drag style={{ cursor: 'grab', marginRight: '1rem' }} />
))

const SortableItem = connect(
  state => ({
    activeItem: state.responses.activeItem,
    activeIndex: state.responses.activeIndex,
    unSaved: state.responses.unSaved,
    flattened: state.responses.flattened,
  }),
  { clickedResponse }
)(
  sortableElement(
    ({
      item,
      index,
      activeItem,
      activeIndex,
      children,
      expanded,
      handleChange,
      clickedResponse,
    }) => (
      <ExpansionPanel
        item={item}
        index={index}
        expanded={activeItem === item.id}
        onClick={() => {
          handleChange(item.id)
          clickedResponse(item.id)
        }}
      >
        <ExpansionPanelSummary
          aria-controls={`${item.id}-content`}
          id={`${item.id}-header`}
        >
          <Flex>
            <DragHandle />
            <Typography>{item.text}</Typography>
          </Flex>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  )
)

const SortableContainer = sortableContainer(({ children }) => (
  <div>{children}</div>
))

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default connect(
  state => ({
    activeItem: state.responses.activeItem,
    activeIndex: state.responses.activeIndex,
  }),
  { onSortEnd }
)(({ items, activeItem, activeIndex, onSortEnd }) => {
  const [expanded, setExpanded] = useState(activeItem)

  const handleChange = panel => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)

  let subitems = []
  return (
    <>
      <SortableContainer
        key={items.length}
        onSortEnd={onSortEnd}
        useDragHandle
        expanded={expanded === activeItem}
        onChange={handleChange(activeItem)}
      >
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            index={index}
            item={item}
            expanded={activeItem === index}
            handleChange={handleChange}
            onClick={() => {
              subitems = item.children
              console.log('TCL: item.children', item.children)
              console.log('TCL: SortableList -> subitems', subitems)
            }}
          ></SortableItem>
        ))}
      </SortableContainer>
      {activeItem !== null ? (
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
          {items
            .filter(subitem => subitem.id === activeItem)[0]
            .children.map((child, index) => {
              console.log(activeItem, activeIndex)
              return (
                <SortableItem
                  key={child.id + child.owner}
                  index={index}
                  item={child}
                />
              )
            })}
        </SortableContainer>
      ) : null}
    </>
  )
})
