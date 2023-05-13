import { useState } from "react"

function ToDoForm({ addTask: newTaskAdd }) {

    const [userInput, setUserInput] = useState('')

    const TraceChange = (currentItem) => {
        setUserInput(currentItem.currentTarget.value)
       
    }
    
    const traceSubmit = (currentItem) => {
        currentItem.preventDefault()
        newTaskAdd(userInput)
        setUserInput("")
    }

    const traceKeyPress = (currentItem) => {
        if(currentItem.key === "Enter") {
            traceSubmit(currentItem)
        }
        
    }

    return (
        <form onSubmit={traceSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={TraceChange}
                onKeyDown={traceKeyPress}
                placeholder="Input task"
            />        
            <button>Save</button>
        </form>
    )
}

export default ToDoForm