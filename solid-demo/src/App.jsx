import { createSignal } from "solid-js";

function Counter(props) {
  console.log("Counter se ejecuta");
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.onIncrement}>Incrementar</button>
    </div>
  );
}

function Message(props) {
  console.log("Message se ejecuta");
  return (
    <div>
      <p>{props.message}</p>
      <button onClick={props.onUpdateMessage}>Actualizar mensaje</button>
    </div>
  );
}

function App() {
  const [count, setCount] = createSignal(0);
  const [message, setMessage] = createSignal("Reactividad!!");
  console.log("App se ejecuta");

  function updateMessage() {
    const nuevo = prompt("Nuevo mensaje");
    if (nuevo) setMessage(nuevo);
  }

  return (
    <div>
      <Counter count={count()} onIncrement={() => setCount(count() + 1)} />
      <Message message={message()} onUpdateMessage={updateMessage} />
    </div>
  );
}

export default App;
