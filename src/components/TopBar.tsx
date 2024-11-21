import React from 'react';

interface TopBarProps {
    //newTask is a string prop that holds the current value of the input
    newTask: string;
    //setter function that updates newTask state(passed from App)
    //used a dispatch function that takes a string or func that returns a string, and updates the state
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    //function passed from App that adds the new task to the list
    addTask: () => void;
}

// FC/FunctionComponent used for type checking
const TopBar: React.FC<TopBarProps> = ({ newTask, setNewTask, addTask }) => {
    return (
        <div className="top-bar">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
};

export default TopBar;
