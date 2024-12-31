import React, { useState } from 'react'
import Counter from './Counter';

export default function App() {
  // let name = '';
  // state:
  const [name, setName] = useState('');

  const handleclick= () => {
    // name = 'Akash';
    // alert(name);
    setName('Akash');
  }

  return (
    <div>
      {/* <h1>Hello {name}</h1>
      <button onClick={handleclick}>Click</button> */}
      
      <Counter></Counter>
    </div>
  )
}
