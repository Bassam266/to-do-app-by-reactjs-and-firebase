import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo.js'
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import  db from './firebase';
import firebase from "firebase"


function App() {
  const [todos , setTodos] = useState(['task one','task two','task three'])
  const [input, setInput] = useState("")
//when the app loads, we need to listen to the database and fetch new todos
  useEffect(() => {
    //this code here fire when the app.js load ...
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
    //console.log(snapshot.docs.map(doc => doc.data().todo));
    setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
  })
  },[])

  const addTodo = (event) => {
     event.preventDefault()

     db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()

     })

     
     setInput("")
  }
  return (
    <div className="App">
      <h1>Todo List With React And Firebase</h1>

      <form>
        <FormControl>
        <InputLabel> ENTER YOUR TAKS</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
     
      <Button disabled={!input} variant="contained" color="primary" type= "submit" onClick={addTodo}>Add list
      </Button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
