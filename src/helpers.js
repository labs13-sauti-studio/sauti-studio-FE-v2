import axios from 'axios'
import { getFlatDataFromTree, getTreeFromFlatData } from 'react-sortable-tree'

export const axiosInstance = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  withCredentials: true,
})

export const plantTree = array =>
  getTreeFromFlatData({
    flatData: array.map(node => ({
      ...node,
      title: node.text,
      workflow: node.workflow,
    })),
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
  })

export const chopTree = tree =>
  getFlatDataFromTree({
    treeData: tree,
    getNodeKey: ({ node }) => node.id, // This ensures your "id" properties are exported in the path
    ignoreCollapsed: false, // Makes sure you traverse every node in the tree, not just the visible ones
  }).map(({ node, path }) => ({
    id: node.id,
    name: node.name,

    // The last entry in the path is this node's key
    // The second to last entry (accessed here) is the parent node's key
    parent: path.length > 1 ? path[path.length - 2] : null,
  }))
