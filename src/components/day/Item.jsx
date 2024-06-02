import React, { useState } from "react"
import { useStore } from "../../data/store"




const Item = ({ item }) => {
	const toggleDone = useStore(state => state.toggleDone)
	const deleteTodo = useStore(state => state.deleteTodo)
	const editTodo = useStore((state) => state.editTodo)

	const [isEditing, setIsEditing] = useState(false)
  	const [editedText, setEditedText] = useState(item.text)
	
	let itemClass = ''
  if (item.done) itemClass += 'done'
  if (item.late) itemClass += ' due'

  const handleChange = () => {
    toggleDone(item.id)
  };

  const handleDelete = () => {
    deleteTodo(item.id)
  };

  const handleEdit = () => {
    setIsEditing(true)
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value)
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      editTodo(item.id, editedText)
      setIsEditing(false)
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditedText(item.text)
  };




  return (
    <div data-cy="item-box" className="item">
      {isEditing ? (
        <>
          <input
		  data-cy="edit-form"
            type="text"
            value={editedText}
            onChange={handleEditChange}
            autoFocus
          />
          <button 
		  data-cy="save-button"
		  onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      		) : (
        <>
          <input
            data-cy="toggle-input"
            type="checkbox"
            checked={item.done}
            onChange={handleChange}
          />
          <label 
		  data-cy="item-field"
		  className={itemClass} onClick={handleChange}>
            {item.text}
          </label>
          <span title="Snooza">💤</span>
          <span 
		  data-cy="edit-button"
		  title="Edit" onClick={handleEdit}>✍️
          </span>
          <span
            className="delete"
            data-cy="delete-button"
            title="Delete"
            onClick={handleDelete}>🗑️
          </span>
        </>
      )}
    </div>
  );
};

export default Item;
