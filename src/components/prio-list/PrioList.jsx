import PrioItem from "./PrioItem"
import { useStore } from '../../data/store.js'
import React, { useState } from "react"


const PrioList = () => {

	const [searchTerm, setSearchTerm] = useState('')
	const todos = useStore(state => state.todos)
	// const items = todos.filter(t => !t.done)

	const filteredTodos = todos.filter(todo => {
		return todo.text.toLowerCase().includes(searchTerm.toLowerCase());
	  });
	

	return (
		<div className="prio-list">
			<h2> Vad ska jag göra nu? </h2>
			<div className="list-container">
				<input 
				data-cy="search-input"
				type="search" placeholder="Filtrera uppgifter"
				value={searchTerm} 
				onChange={(e) => setSearchTerm(e.target.value)} />

			<div className="prio-items"
					data-cy="search-results">
					{filteredTodos.map((item, index) => (
						<PrioItem key={item.id} item={item} num={index + 1} />
					))}
				</div>

			</div>
		</div>
	)
}
export default PrioList
