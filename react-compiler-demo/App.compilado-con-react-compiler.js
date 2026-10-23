import { c as _c } from "react/compiler-runtime";
import React, { useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  const $ = _c(11);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Reactividad!!");
  console.log("App se ha renderizado");
  let t0;
  if ($[0] !== count) {
    t0 = function increment() {
      setCount(count + 1);
    };
    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const increment = t0;
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = function updateMessage() {
      const nuevo = prompt("Nuevo mensaje");
      if (nuevo) {
        setMessage(nuevo);
      }
    };
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const updateMessage = t1;
  let t2;
  if ($[3] !== count || $[4] !== increment) {
    t2 = /*#__PURE__*/_jsx(Counter, {
      count: count,
      onIncrement: increment
    });
    $[3] = count;
    $[4] = increment;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== message) {
    t3 = /*#__PURE__*/_jsx(Message, {
      message: message,
      onUpdateMessage: updateMessage
    });
    $[6] = message;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== t2 || $[9] !== t3) {
    t4 = /*#__PURE__*/_jsxs("div", {
      children: [t2, t3]
    });
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
function Counter(t0) {
  const $ = _c(7);
  const {
    count,
    onIncrement
  } = t0;
  console.log("Counter se ha renderizado");
  let t1;
  if ($[0] !== count) {
    t1 = /*#__PURE__*/_jsx("h1", {
      children: count
    });
    $[0] = count;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== onIncrement) {
    t2 = /*#__PURE__*/_jsx("button", {
      onClick: onIncrement,
      children: "Incrementar"
    });
    $[2] = onIncrement;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /*#__PURE__*/_jsxs("div", {
      children: [t1, t2]
    });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}
function Message(t0) {
  const $ = _c(7);
  const {
    message,
    onUpdateMessage
  } = t0;
  console.log("Message se ha renderizado");
  let t1;
  if ($[0] !== message) {
    t1 = /*#__PURE__*/_jsx("p", {
      children: message
    });
    $[0] = message;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== onUpdateMessage) {
    t2 = /*#__PURE__*/_jsx("button", {
      onClick: onUpdateMessage,
      children: "Actualizar mensaje"
    });
    $[2] = onUpdateMessage;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /*#__PURE__*/_jsxs("div", {
      children: [t1, t2]
    });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}
export default App;