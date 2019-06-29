import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  withCredentials: true,
})

export const ifItemChildren = item => !!item.children

/* const SortableList = connect(
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
          }}
        ></SortableItem>
      ))}
    </SortableContainer>
  )
})
 */
