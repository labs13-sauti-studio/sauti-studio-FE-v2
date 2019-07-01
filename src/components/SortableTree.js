/* eslint-disable import/no-named-default */
import React, { useState } from 'react'
import {
  default as ReactSortableTree,
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath,
  toggleExpandedForAll,
} from 'react-sortable-tree'
import { setActiveRes, saveTree } from 'actions/responsesActions'
import { plantTree, chopTree, findNewBranches, areTreesEqual } from 'helpers'
import { TreeStyles } from 'theme'
import { connect } from 'react-redux'
import {
  Button,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const SortableTree = props => {
  const [expanded, setExpanded] = useState(false)
  const [treeData, setTreeData] = useState(
    toggleExpandedForAll({ treeData: plantTree(props.items), expanded })
  )
  const newBranches = findNewBranches(treeData)
  const getNodeKey = ({ treeIndex }) => treeIndex
  return (
    <section>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.saveTree(
            areTreesEqual(chopTree(treeData), props.responses.loaded)
          )
        }}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setExpanded(!expanded)
          setTreeData(toggleExpandedForAll({ treeData, expanded }))
        }}
      >
        {!expanded ? 'Collapse' : 'Expand'}
      </Button>
      {props.responses.hasBeenLoaded ? (
        <TreeStyles>
          <div style={{ height: '100%' }}>
            <ReactSortableTree
              treeData={treeData}
              onChange={treeData => setTreeData(treeData)}
              generateNodeProps={({ node, path }) => ({
                title:
                  node.id === props.active.id ? (
                    <TextField
                      id="standard-name"
                      margin="normal"
                      value={node.title}
                      onChange={event =>
                        setTreeData(
                          changeNodeAtPath({
                            treeData,
                            path,
                            getNodeKey,
                            newNode: { ...node, title: event.target.value },
                          })
                        )
                      }
                    />
                  ) : (
                    <Typography>{node.title}</Typography>
                  ),
                buttons: [
                  // ADD BUTTON
                  <IconButton
                    aria-label="Add"
                    onClick={() => {
                      setTreeData(
                        addNodeUnderParent({
                          treeData,
                          parentKey: path[path.length - 1],
                          expandParent: true,
                          getNodeKey,
                          newNode: { title: `New Response` },
                        }).treeData
                      )
                    }}
                  >
                    <AddIcon />
                  </IconButton>,
                  // DELETE BUTTON
                  <IconButton
                    aria-label="Delete"
                    onClick={() => {
                      props.setActiveRes(node)
                      console.log(newBranches)
                    }}
                  >
                    <EditIcon />
                  </IconButton>,
                  // EDIT BUTTON
                  <IconButton
                    aria-label="Edit"
                    onClick={() =>
                      setTreeData(
                        removeNodeAtPath({ treeData, path, getNodeKey })
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>,
                ],
              })}
            />
          </div>
        </TreeStyles>
      ) : (
        <LinearProgress />
      )}
      <div>
        <Typography variant="h2">Workflow</Typography>
        {/* {JSON.stringify(props.workflow)} */}
        <Typography variant="h2">Responses</Typography>
        {/* {JSON.stringify(props.responses)} */}
      </div>
    </section>
  )
}

export default connect(
  state => ({ workflow: state.workflow, responses: state.responses }),
  { setActiveRes, saveTree }
)(SortableTree)
