/* eslint-disable import/no-named-default */
import React, { useState } from 'react'
import {
  default as ReactSortableTree,
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath,
} from 'react-sortable-tree'
import { setActiveRes } from 'actions/responsesActions'
import { plantTree, ChopTree } from 'helpers'
import { TreeStyles } from 'theme'
import { connect } from 'react-redux'
import { TextField, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const SortableTree = props => {
  const [treeData, setTreeData] = useState(plantTree(props.items))
  const getNodeKey = ({ treeIndex }) => treeIndex
  return (
    <TreeStyles>
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
                onChange={event => {
                  const title = event.target.value
                  setTreeData(
                    changeNodeAtPath({
                      treeData,
                      path,
                      getNodeKey,
                      newNode: { ...node, title },
                    })
                  )
                }}
              />
            ) : (
              <Typography>{node.title}</Typography>
            ),
          buttons: [
            <IconButton
              aria-label="Add"
              onClick={() =>
                setTreeData(
                  addNodeUnderParent({
                    treeData,
                    parentKey: path[path.length - 1],
                    expandParent: true,
                    getNodeKey,
                    newNode: { title: `New Node` },
                  }).treeData
                )
              }
            >
              <AddIcon />
            </IconButton>,
            <IconButton
              aria-label="Delete"
              onClick={() => props.setActiveRes(node)}
            >
              <EditIcon />
            </IconButton>,
            <IconButton
              aria-label="Edit"
              onClick={() =>
                setTreeData(removeNodeAtPath({ treeData, path, getNodeKey }))
              }
            >
              <DeleteIcon />
            </IconButton>,
          ],
        })}
      />
      {JSON.stringify(props.active)}
    </TreeStyles>
  )
}

export default connect(
  null,
  { setActiveRes }
)(SortableTree)
