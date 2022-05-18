import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

function Form({ addTodo }) {

  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = {text: text, id: id};
    setId(id + 1);
    addTodo(todoObj) 
  }

  return (
    <Paper style={{ padding: "2em"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField 
        id="outlined-basic"
        label="Task"
        variant="outlined"
        fullWidth
        onChange={(e) => setText(e.target.value)} 
        />
        <Button variant="text" onClick={() => todoCreate(text)}>ADD +</Button>
      </div>
    </Paper>
  );
}

export default Form;