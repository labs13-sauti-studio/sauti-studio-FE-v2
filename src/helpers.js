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
      workflow: node.workflow,
      index: node.index,
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
    id: node.id !== null ? 1 : null,
    title: node.title,
    index: node.index,

    // The last entry in the path is this node's key
    // The second to last entry (accessed here) is the parent node's key
    parent: path.length > 1 ? path[path.length - 2] : null,
  }))

export const findNewBranches = treeData =>
  chopTree(treeData).filter(item => !item.id)

export const findChangedBranched = (unSaved, loaded) => [
  // first find items who's title has changed
  ...unSaved
    .filter(obj => obj.id)
    .filter(
      obj2 => loaded.find(obj3 => obj3.id === obj2.id).title !== obj2.title
    ),
  // then find items who's parent has changed
  ...unSaved
    .filter(obj => obj.id)
    .filter(
      obj2 => loaded.find(obj3 => obj3.id === obj2.id).parent !== obj2.parent
    ),
]

export const areTreesEqual = (unSaved, loaded) => ({
  added: findNewBranches(unSaved, loaded),
  changed: findChangedBranched(unSaved, loaded),
  deleted: [],
})

// export const saveTree = data => {
//   console.log(data)
// }
