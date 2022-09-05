import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useState } from "react";
function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na reacta", status: false },
    { id: 2, content: "Zrobić trening", status: true },
  ]);
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  const toggleTaskStatus = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      };
      return task;
    }));
  };
  const setAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task, status: true,
      }
    )));
  };
  return (
    <MainContainer>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskStatus={toggleTaskStatus}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllTasksDone={setAllTasksDone}
          />}
      />
    </MainContainer>
  );
}

export default App;