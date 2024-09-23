import React,{useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TaskForm from './components/taskForm';
import OutputContent from './components/outputContent';
// CSS
import styles from './App.module.css';
// Interface
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>What do you do?</h2>
        <TaskForm btnInput='Create Task' taskList={taskList} setTaskList={setTaskList}/>
        <h3>Your tasks:</h3>
        <OutputContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;