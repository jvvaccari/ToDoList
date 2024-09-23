import React,{useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import Modal from './components/modal';

// CSS
import styles from './App.module.css';
// Interface
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = ((id: number) => {
    setTaskList(
      taskList.filter((task) => {
      return task.id !== id;
    }));
  });

  const hideOrShowModal = ((display: boolean) => {
    const modal = document.querySelector('#modal');
    if(display){
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  });

  const editTask = ((task:ITask) : void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  });

  const updateTask = ((id: number,title: string,difficulty: string) => {
    const updatedTask:ITask = {id,title,difficulty};
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  });

  return (
    <div className={styles.container}>
      <Modal children={
        <TaskForm
          btnInput="Edit Task"
          taskList={taskList}
          setTaskList={setTaskList}
          updateTask={taskToUpdate}
          handleUpdate={updateTask}
        />
      }/>
      <Header />
      <main className={styles.main}>
        <h2>What do you do?</h2>
        <TaskForm btnInput='Create Task' taskList={taskList} setTaskList={setTaskList} handleUpdate={updateTask}/>
        <h2>Your tasks:</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;