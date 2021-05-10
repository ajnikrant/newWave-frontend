import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    fetch ('http://localhost:3000/listings')
    .then(r=> r.json())
    .then(console.log)
   }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
