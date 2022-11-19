import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { New, View, Edit, NoteForm } from "./components";
import Home from './pages/Home';


function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/:id'>
          <Route index element={<View />} />
          <Route path='edit' element={<Edit />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
  );
}

export default App;
