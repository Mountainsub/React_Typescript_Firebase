import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { FormControl,List, TextField } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { makeStyles } from "@material-ui/core/styles";


import { db, auth} from "./firebase";
import TaskItem from "./TaskItem";
import Login from "./Login";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";



const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    margin: "auto",
    width: "40%",
  },
});



const App: React.FC = (props : any) => {
  const [tasks , setTasks] = useState([{id: "",title: ""}]);
  const [input, setInput] = useState("");
  const classes = useStyles();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      !user && props.history.push("login");
    });
    return () => unSub();
  });
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot:any) => {
      setTasks(
        snapshot.docs.map((doc:any) => ({id: doc.id, title: doc.data().title}))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input});
    setInput("");
  };

  return (
    <div className={styles.app__root}>
      <h1>To do App by React/Firebase</h1>
      <button className = {styles.app__logout}
      onClick = {
        async () => {
          try {
            await auth.signOut();
            props.history.push("/login")
          } catch (error) {
            alert(error.message);
          }
        }}>
          <ExitToAppIcon/>
          </button>
      <br />
      <FormControl>
        <TextField
        className = {classes.field}
        InputLabelProps = {{
          shrink: true,
        }}
        label = "New task?"
        value = {input}
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => 
            setInput(e.target.value)
         }/>
      </FormControl>
      <button className = {styles.app__icon} disabled = {!input} onClick = {newTask}>
        <AddToPhotosIcon />
      </button>

      {tasks.map((task) => (
        <h3 key = {task.id}>{task.title}</h3>
      ))}
      <List className = {classes.list}>
        {tasks.map((task) => (
          <TaskItem id = {task.id} title = {task.title}/>
        ))}
        </List>
    </div>
  );
}

export default App;
