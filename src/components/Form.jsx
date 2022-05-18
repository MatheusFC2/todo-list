import { TextField, Button, Paper } from '@mui/material';
import React from 'react';

function Form() {
  return (
    <Paper style={{ padding: "2em"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth />
        <Button variant="contained">Contained</Button>
      </div>
    </Paper>
  );
}

export default Form;