import cx from 'classnames';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import styles from '.../styles/Home.module.css'

const Home = () => {
  
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    {
      id: '1234',
      message: "Buy Milk",
      done: false,
    }
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);

      setTodoItem("");
    }
  };

  const handleEnter = (e:any) => {
    if (e.key == 'Enter') {
      handleAdd();
    }
  };

  const handleToggle = (id:any) => {
    const _items = items.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setItems(_items);
  };

  return (
  <div className="w-3/4 mx-auto text-center">
    
    <h1 className="text-5xl">TODO App</h1>

      <div className="pt-12">
        <input 
          type="text" 
          value={todoItem} 
          className='text-gray-900 px-4 py-2 text-center rounded'
          onChange={(e) => setTodoItem(e.target.value)} 
          onKeyDown={handleEnter}
          />
      </div>

      <ul className='pt-12'>
        {
          items.map(({id, message, done}) => (
            <li key={id} onClick={() => handleToggle(id)} 
            className={cx('item', { done })}
            > 
            {message} </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;

