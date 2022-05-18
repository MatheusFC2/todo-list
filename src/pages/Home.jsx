import { List } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Form from '../components/Form';
import { TodoItem } from '../components/Todoitem';

// import { Container } from './styles';

function Home() {
  return (
    <Container maxWidth="xs" style={{marginTop: '3em'}}>
    <Form />
    <List sx={{bgcolor: 'background.paper', marginTop: "1em" }}>
      <TodoItem />
    </List>
    </Container>
  )
}

export default Home;