import React from 'react';
import './App.css';

import Counter from "./components/counter/counter";
import ToDoList from "./components/to_do_list/to_do_list";


function App() {
  return (
    <div className="App">
     {/*<Counter/>*/}
        <ToDoList/>
    </div>
  );
}

export default App;
