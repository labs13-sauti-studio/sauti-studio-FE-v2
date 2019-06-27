import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import {
  onSortEnd,
  clickedResponse,
  handleChange,
} from 'actions/responsesActions'
import React, { useState } from 'react'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Drag } from 'mdi-material-ui'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Flex, InputWrapper } from '@/utility'
import TextField from '@material-ui/core/TextField'

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

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

export const DragHandle = sortableHandle(() => (
  <Drag style={{ cursor: 'grab', marginRight: '1rem' }} />
))

const SortableItem = connect(
  state => ({
    activeItem: state.responses.activeItem,
    unSaved: state.responses.unSaved,
    flattened: state.responses.flattened,
  }),
  { clickedResponse }
)(
  sortableElement(
    ({ item, index, activeItem, handleChange, clickedResponse }) => (
      <ExpansionPanel
        item={item}
        index={index}
        expanded={activeItem === item.id}
      >
        <ExpansionPanelSummary
          aria-controls={`${item.id}-content`}
          id={`${item.id}-header`}
          expandIcon={
            <ExpandMoreIcon
              onClick={() => {
                handleChange(item.id)
                clickedResponse(item.id)
              }}
            />
          }
        >
          <Flex justify="space-between" align="center">
            <span>
              <DragHandle />
              <Typography style={{ float: 'right' }}>{item.text}</Typography>
            </span>
            <div>
              <Button size="small" style={{ marginRight: '.25rem' }}>
                edit
              </Button>
              <Button color="primary" size="small">
                Delete
              </Button>
            </div>
          </Flex>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Flex column>
            <Flex
              align="center"
              justify="space-between"
              style={{ margin: '1rem 0' }}
            >
              <Typography variant="h4">
                Response Count:{' '}
                <Typography variant="span" color="primary">
                  {getChildCount(item)}
                </Typography>
              </Typography>
              {/* ADD NEW RESPONSE */}
              <AddNewResponse />
            </Flex>
            <Divider />
            <div style={{ paddingTop: '1rem' }}>
              {activeItem !== null ? (
                <SortableContainer useDragHandle>
                  {item.children
                    ? item.children.map((child, index) => (
                        <SortableItem
                          key={child.id + child.owner}
                          index={index}
                          item={child}
                        />
                      ))
                    : null}
                </SortableContainer>
              ) : null}
            </div>
          </Flex>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  )
)

const SortableContainer = sortableContainer(({ children }) => (
  <div>{children}</div>
))

const AddNewResponse = connect(
  state => ({
    new: state.responses.new,
    text: state.responses.new.text,
    owner: state.responses.new.owner,
    workflow: state.responses.new.workflow,
    index: state.responses.new.index,
  }),
  { handleChange }
)(({ handleChange }) => (
  <InputWrapper style={{ width: '50%' }}>
    <TextField
      id="outlined-name"
      label="New Question"
      name="question_text"
      onChange={handleChange}
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
))

export default connect(
  state => ({
    activeItem: state.responses.activeItem,
  }),
  { onSortEnd }
)(({ items, activeItem, onSortEnd }) => {
  const [expanded, setExpanded] = useState(activeItem)

  const handleChange = panel => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)

  let subitems = []
  return (
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
          subitems={item.children}
          onClick={() => {
            subitems = item.children
            console.log('TCL: item.children', item.children)
            console.log('TCL: SortableList -> subitems', subitems)
          }}
        ></SortableItem>
      ))}
    </SortableContainer>
  )
})
