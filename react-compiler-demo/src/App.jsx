import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Reactividad!!');

  console.log('App se ha renderizado');

  function increment() {
    setCount(count + 1)
  }

  function updateMessage() {
    let nuevo = prompt('Nuevo mensaje');
    if (nuevo) {
      setMessage(nuevo);
    }
  }

  return (
    <div>
      <Counter count={count} onIncrement={increment} />
      <Message message={message} onUpdateMessage={updateMessage} />
    </div>
  );
}

function Counter({ count, onIncrement }) {
  console.log('Counter se ha renderizado');
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

function Message({ message, onUpdateMessage }) {
  console.log('Message se ha renderizado');
  return (
    <div>
      <p>{message}</p>
      <button onClick={onUpdateMessage}>Actualizar mensaje</button>
    </div>
  );
}

export default App
