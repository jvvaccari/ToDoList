import * as React from 'react';
import { ITask } from '../interfaces/ITask';
import styles from './TaskList.module.css';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface ITaskList {
    taskList: ITask[];
    handleDelete(id: number): void;
}

const TaskList = (({taskList,handleDelete} : ITaskList) => {
    
    const editTask = ((e: React.MouseEvent): void =>{
        const modal = document.querySelector("#modal");
        modal!.classList.remove("hide");
    });

    return (
      <>
        {taskList.length > 0 ? 
        (
            taskList.map((task) => (
                task.title && task.difficulty ? (
                    <div className={styles.cards_column}>
                        <div className={styles.card} key={task.id}>
                            <div className={styles.contentCard}>
                                <h4>{task.title}</h4> 
                                <p>Difficulty: {task.difficulty}</p>
                            </div>
                            <div className={styles.icons_column}>
                                <div>
                                    <CreateIcon onClick={editTask} sx={{color: 'white'}}/>
                                </div>
                                <div>
                                    <DeleteForeverIcon onClick={() => handleDelete(task.id)} sx={{color: 'white'}}/>
                                </div>
                            </div>
                        </div>
                    </div>    
                ) : null
            ))
        ) : (
            <p>No tasks registered</p>
        )}
      </>
    );
  
});

export default TaskList;
