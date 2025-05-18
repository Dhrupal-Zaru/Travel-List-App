import './App.css';
import {useEffect, useState} from 'react';
import Logo from './Components/Logo';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import State from './Components/State'


function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("packingList");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("packingList", JSON.stringify(items));
  }, [items]);


    function handleAddItems(item){
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id !== id));
  }
  function handleUpdateItem(id){
    setItems((items)=>items.map((item)=>item.id === id ? {...item, packed: !item.packed} : item));
  }
  function handleClearList(){
    const confirmed = window.confirm('Do you want to delete all items?')
    if(confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onClearList={handleClearList}/>
      <State items={items}/>
    </div>
  );
}

export default App;
