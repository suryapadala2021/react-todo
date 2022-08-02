import './index.css'

const TodoItem = props => {
  const {obj, onDelete} = props
  const {title, id} = obj

  const Delete = () => {
    onDelete(id)
  }

  return (
    <li className="todo">
      <p className="todoName">{title}</p>
      <button type="button" className="delete-btn" onClick={Delete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
