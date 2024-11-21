import React from 'react';
import { Task } from '../types';

interface ItemCardProps {
    //task is a single task object passed from the ItemList component
    //which renders the task's task property
    task: Task;
    //deleteTask is the function passed down from App to delete a task
    deleteTask: (id: number) => void;
    //Receive the toggle function as a prop
    toggleCompletion: (id: number) => void;
}

// FC/FunctionComponent used for type checking
const ItemCard: React.FC<ItemCardProps> = ({ task, deleteTask, toggleCompletion }) => {
    return (
        <div className="item-card">
            {/* Add a visual cue for completion */}
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task}
            </p>

            {/* Button to toggle the completion status */}
            <button onClick={() => toggleCompletion(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>

            {/* Delete button that calls the deleteTask function */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default ItemCard;
