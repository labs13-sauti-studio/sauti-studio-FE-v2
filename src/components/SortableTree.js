/* eslint-disable import/no-named-default */
import React, { useState } from 'react'
import {
  default as ReactSortableTree,
  addNodeUnderParent,
  changeNodeAtPath,
  toggleExpandedForAll,
  getTreeFromFlatData,
  getNodeAtPath,
} from 'react-sortable-tree'
import { setActiveRes, saveTree } from 'actions/responsesActions'
import { chopTree, areTreesEqual, axiosInstance } from 'helpers'
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
import { Flex } from '@/utility'

const createTree = (rows, settings) =>
  getTreeFromFlatData({
    flatData: rows.map(node => ({
      ...node,
      ...settings,
    })),
    getKey: node => node.id,
    getParentKey: node => node.parent,
    rootKey: null,
  })

const SortableTree = props => {
  // User Settings
  const [settings, setSettings] = useState({
    expanded: true,
    expandParent: true,
    addAsFirstChild: true,
  })

  // Initial tree state
  const [treeData, setTreeData] = useState(
    getTreeFromFlatData({
      flatData: props.items.map(node => ({
        ...node,
        ...settings,
      })),
      getKey: node => node.id,
      getParentKey: node => node.parent,
      rootKey: null,
    })
  )
  const getNodeKey = ({ treeIndex }) => treeIndex
  return (
    <section>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setSettings({ ...settings, expanded: !settings.expanded })
          setTreeData(
            toggleExpandedForAll({ treeData, expanded: !settings.expanded })
          )
        }}
      >
        {settings.expanded ? 'Collapse' : 'Expand'}
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
                            newNode: {
                              ...node,
                              title: event.target.value,
                            },
                          })
                        )
                      }
                    />
                  ) : (
                    <Typography>
                      {node.id} {node.title} {node.parent}
                    </Typography>
                  ),
                buttons: [
                  // Add new response
                  <IconButton
                    aria-label="Add"
                    size="small"
                    onClick={async () =>
                      axiosInstance
                        .post(`responses/${props.workflow.id}`, {
                          title: 'new item',
                          parent: getNodeAtPath({
                            treeData,
                            path,
                            getNodeKey,
                          }).node.id,
                        })
                        .then(({ data: newNode }) => {
                          props.setActiveRes(newNode)
                          setTreeData(
                            addNodeUnderParent({
                              treeData,
                              parentKey: path[path.length - 1],
                              getNodeKey,
                              newNode,
                              ...settings,
                            }).treeData
                          )
                        })
                    }
                  >
                    <AddIcon />
                  </IconButton>,
                  // Edit clicked response
                  <IconButton
                    aria-label="Edit"
                    size="small"
                    onClick={() => props.setActiveRes(node)}
                  >
                    <EditIcon />
                  </IconButton>,
                  // Delete current response
                  <IconButton
                    aria-label="Delete"
                    size="small"
                    onClick={() =>
                      axiosInstance
                        .delete(
                          `responses/${
                            getNodeAtPath({
                              treeData,
                              path,
                              getNodeKey,
                            }).node.id
                          }`
                        )
                        .then(({ data: { current } }) =>
                          setTreeData(createTree(current, settings))
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
    </section>
  )
}

export default connect(
  state => ({ workflow: state.workflow, responses: state.responses }),
  { setActiveRes, saveTree }
)(SortableTree)
