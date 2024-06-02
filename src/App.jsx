import React, { useState } from 'react'
import Form from "./Form";
import {nanoid} from "nanoid";


function App() {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed: false,
      id:nanoid(),
    };
    setItems([...items, newItem]);
    console.log(items)
  };
  return <section className='section-center'>
    <Form addItem={addItem}/>
  </section>
}

export default App
