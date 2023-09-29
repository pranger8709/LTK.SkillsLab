import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => {
  const [todos, setTodos] = useState(["hi there"]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // async function fetchData(){
    //     const result = await getUsers();
    //     setData(result);
    //     console.log("teste: ", result);
    // }
    // fetchData();
    console.log(todos)
}, [todos]);

const deleteFunction = (index) => {
  let update = todos.filter((_,i) => i !== index)
  setTodos(update);
}
  return(
  <div>
    <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          AddToDo: '',
        }}
        onSubmit={(values) => {
          setTodos([...todos, values['AddToDo']]);
        }}
      >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="AddToDo" placeholder="TextHere" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    <table>
        <thead>
          <th>
                TODO
          </th>
        </thead>
        <tbody>

          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteFunction(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
  };

export default BasicForm
