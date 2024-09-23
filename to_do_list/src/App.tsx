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

  const deleteTask = ((id: number) => {
    setTaskList(
      taskList.filter((task) => {
      return task.id !== id;
    }));
  });

  return (
    <div className={styles.container}>
      <Modal children={<TaskForm btnInput='Create Task' taskList={taskList} setTaskList={setTaskList}/>}/>
      <Header />
      <main className={styles.main}>
        <h2>What do you do?</h2>
        <TaskForm btnInput='Create Task' taskList={taskList} setTaskList={setTaskList}/>
        <h2>Your tasks:</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;