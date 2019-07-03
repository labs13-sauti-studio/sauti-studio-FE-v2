/* eslint-disable no-unused-expressions */
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
import { axiosInstance } from 'helpers'
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

// Example Demo Workflow
const exampleFlow = [
  { id: 1, title: 'Company Info', parent: null, index: 1 },
  { id: 2, title: 'Office Hours', parent: null, index: 2 },
  { id: 3, title: 'Sauti Studio Design', parent: 1, index: 1 },
  { id: 4, title: 'Monday - Friday 9AM-5PM', parent: 2, index: 1 },
  { id: 5, title: 'Company Holidays', parent: 2, index: 2 },
]

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
    props.items.length === 0 ? [] : createTree(props.items, settings)
  )
  const [title, setTitle] = useState('')
  const getNodeKey = ({ treeIndex }) => treeIndex
  return (
    <section>
      <Flex>
        <div>
          <TextField
            id="standard-name"
            variant="outlined"
            margin="regular"
            value={title}
            onChange={event => setTitle(event.target.value)}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                axiosInstance.post(`/responses/${props.workflow.id}`, {
                  title,
                })
                setActiveRes({ id: null })
                setTitle('')
              }
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              axiosInstance
                .post(`/responses/${props.workflow.id}`, {
                  title,
                })
                .then(({ data: { total } }) => {
                  setTreeData(createTree(total, settings))
                  setTitle('')
                })
            }}
          >
            Add Root
          </Button>
        </div>
        <div>
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
        </div>
      </Flex>
      {props.loading ? (
        <TreeStyles>
          <ReactSortableTree
            treeData={treeData}
            onMoveNode={({ node, nextIndex }) => {
              axiosInstance.put(`responses/${node.id}`, {
                ...node,
                index: nextIndex,
              })
            }}
            onChange={treeData => {
              // console.log(opts)
              setTreeData(treeData)
            }}
            generateNodeProps={({ node, path }) => ({
              title:
                node.id === props.active.id ? (
                  <TextField
                    id="standard-name"
                    value={node.title}
                    onKeyDown={event => {
                      if (event.keyCode === 13) {
                        axiosInstance.put(`/responses/${node.id}`, node)
                        props.setActiveRes({ id: null })
                      }
                    }}
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
                  <Typography variant="h6">{node.title}</Typography>
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
        </TreeStyles>
      ) : (
        <LinearProgress />
      )}
    </section>
  )
}

export default connect(
  state => ({
    workflow: state.workflow,
    loading: state.responses.hasBeenLoaded,
    items: state.responses.unSaved,
    active: state.responses.modal,
  }),
  { setActiveRes, saveTree }
)(SortableTree)
