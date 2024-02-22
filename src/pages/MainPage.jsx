import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {fetchTasks} from "../services/TaskService";
import Task from "../componets/task/Task";


export default function MainPage(){
    const {isAuth, id} = useAuth();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks(id);
                setTasks(fetchedTasks);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching tasks: ", error);
            }
        };

        getTasks();
    }, [id]);

    return isAuth ?
        (
            <div>
                {error && <p>{error}</p>}
                {tasks.map(task => (<Task key={task.id} id={task.id} completed={task.completed} title={task.title}></Task>))}
            </div>
        ) :
        (<Navigate to="/login"/>)
}