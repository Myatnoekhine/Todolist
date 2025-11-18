import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTasks() {
        // logic to add new task
    }

    function deleteTasks(index) {
        // logic to delete task
    }

    function moveTasksUp(index) {
        // logic to move task up
    }

    function moveTasksDown(index) {
        // logic to move task down
    }

    return (
        <div className='To-Do-List'>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTasks}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className="delete-button" onClick={() => deleteTasks(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTasksUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTasksDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
