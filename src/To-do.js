function ToDo({ todo, changeCompliteStatus, deleteCurrentTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => changeCompliteStatus(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => deleteCurrentTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo