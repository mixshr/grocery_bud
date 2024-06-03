import React, {useState} from 'react'
import Form from "./Form";
import {nanoid} from "nanoid";
import Items from "./Items";
import {ToastContainer} from "react-toastify";

const setLocaleStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
};
const defaultList = JSON.parse(localStorage.getItem('item') || '[]');
function App() {
  const [items, setItems] = useState(defaultList);
  getLocalStorage();
  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed: false,
      id:nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocaleStorage(newItems);
  };

  const removeItem = (itemID) => {
    const newItems = items.filter((item) => itemID !== item.id);
    setItems(newItems);
    setLocaleStorage(newItems);
  }

  const editItem = (itemId) => {
    items.map((item) => {
      if (itemId === item.id) {
        return {...item, completed: !item.completed};
      }
      return item;
    });
  };

  return <section className='section-center'>
    <ToastContainer position='top-center'/>
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>
}

export default App;
