import React from 'react';
import { Task } from '../types';
import ItemCard from './ItemCard';

interface ItemListProps {
    //tasks is an array of task objects passed from App.
    //Used to render the list of tasks.
    tasks: Task[];
    // deleteTask function passed from App
    deleteTask: (id: number) => void;
    //add the toggleCompletion function
    toggleCompletion: (id: number) => void;
}

// FC/FunctionComponent used for type checking
const ItemList: React.FC<ItemListProps> = ({ tasks, deleteTask, toggleCompletion }) => {
    return (
        //inside .map() func, each task is passed as a prop
        //to the ItemCard component
        <div className="item-list">
            {tasks.map((task) => (
                // Pass both the task data and the delete function to each ItemCard
                <ItemCard key={task.id} task={task} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
            ))}
        </div>
    );
};

export default ItemList;
