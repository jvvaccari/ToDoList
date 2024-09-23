import React, {useState,ChangeEvent,FormEvent} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './TaskForm.module.css';

// Interface
import { ITask } from '../interfaces/ITask';

interface ITaskProps{
    btnInput: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnInput,taskList,setTaskList}: ITaskProps) => {

    // const [id,setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const newTask:ITask = {id,title,difficulty};

        setTaskList!([...taskList, newTask]);

        setTitle("");
        setDifficulty("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        
        if(name === "title"){
            setTitle(value);
        }else if(name === "difficulty"){
            setDifficulty(value);
        }
    };
    
    return (
        <form onSubmit={addTaskHandler}>
            <div className={styles.input_content}>
                
                <TextField 
                    name="title"
                    id="outlined-basic" 
                    label="Task title" 
                    variant="outlined" 
                    size="small" 
                    sx={{width: '320px'}}
                    onChange={handleChange}
                    value= {title}
                />
                
                <TextField 
                    name="difficulty"
                    id="outlined-basic" 
                    label="Task difficulty" 
                    variant="outlined" 
                    size="small" 
                    sx={{width: '320px'}}
                    onChange={handleChange}
                    value= {difficulty}
                />
            
                <Button 
                    type="submit" 
                    value={btnInput} 
                    variant="contained" 
                    sx={{width: '320px',backgroundColor: '#61dafb',color: 'black'}}
                >
                    {btnInput}
                </Button>
            </div> 
        </form>   
    );
}

export default TaskForm;
