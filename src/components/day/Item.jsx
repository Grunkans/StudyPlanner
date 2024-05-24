import React from "react"
import { useStore } from "../../data/store"




const Item = ({ item }) => {
	const toggleDone = useStore(state => state.toggleDone);
	const deleteTodo = useStore(state => state.deleteTodo);
  
	let itemClass = '';
  if (item.done) itemClass += 'done';
  if (item.late) itemClass += ' due';

  const handleChange = () => {
    toggleDone(item.id);
  };

  const handleDelete = () => {
    deleteTodo(item.id);
  };




  return (
    <div data-cy="item-box" className="item">
      <input data-cy="toggle-input" 
	  type="checkbox" 
	  checked={item.done} 
	  onChange={handleChange} />
      <label className={itemClass} onClick={handleChange}>
        {item.text}
      </label>
      <span title="Snooza">💤</span>
      <span title="Ändra">✍️</span>
      <span data-cy="delete-button" title="Ta bort" onClick={handleDelete}>🗑️</span>
    </div>
  );
};


export default Item
