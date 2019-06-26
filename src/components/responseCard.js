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
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import styled from 'styled-components'
import { clickedCardQuestion, toggleResponseHover } from 'actions'
import { connect, useSelector } from 'react-redux'
import { DragHandle } from '@/sortableList'
import { Flex } from '@/utility'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const ResponseCard = ({
  id,
  text,
  owner,
  workflow,
  index,
  isHoveringQuestion,
  responses,
}) => {
  const items = responses.filter(item => item.owner === id)

  return (
    <Flex>
      <DragHandle />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Flex column>
            {items.map(item => (
              <ExpansionPanel style={{ width: '100%' }}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.text}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {items.map(item => (
                    <Typography key={item.id}>{item.text}</Typography>
                  ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Flex>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Flex>
  )
}

export default connect(
  state => ({
    isHoveringQuestion: state.ui.isHoveringQuestion,
    responses: state.responses.unSaved,
  }),
  { clickedCardQuestion, toggleResponseHover }
)(ResponseCard)
