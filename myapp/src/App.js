// ! Create component
import { useState } from "react";
import Mybutton from "./Mybutton";
import Mybutton1 from "./Mybutton1";

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to React App</h1>
//       <Mybutton />
//     </div>
//   );
// }

// ! Displaying Data

// const user = {
//   name: "Sachin Tendulkar",
//   imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg",
//   imgSize: "40"
// };

// export default function profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imgSize}
//         alt={"photo " + user.name}
//         style={{ width: user.imgSize, height: user.imgSize }}
//       />
//     </>
//   );
// }

// ! Conditional Rendering

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return <div>{content}</div>;

// // conditional ? operator. Unlike if, it works inside JSX:
// <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;

// // When you don’t need the else branch
// <div>{isLoggedIn && <AdminPanel />}</div>;

// ! Rendering List

// const pdts = [
//   { title: "cab", id: 1 },
//   { title: "Garlci", id: 2 },
//   { title: "Apple", id: 3 }
// ];

// const listItems = pdts.map(pdt =>
//     <li key={pdt.id}>
//         {pdt.title}
//     </li>
// );

// return (
//     <ul>{listItems}</ul>
// )

// const pdts = [
//   { title: "CAbbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 }
// ];

// export default function ShoppingList() {
//   const listItems = pdts.map((pdt) => (
//     <li
//       key={pdt.id}
//       style={{
//         color: pdt.isFruit ? "Magenta" : "green"
//       }}
//     >
//       {pdt.id}
//       {pdt.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }

// ! Responding to events

// export default function Mybutton3() {
//   function handleClick() {
//     alert("you have clicked me");
//   }
//   return(
//     <button onClick={handleClick}>
//       Clivk me
//     </button>
//   )
// }

// ! Updating the screen
// ? Desigining a counter

// ? Written in the way of JS
// import { useState } from "react";

// export default function Mybutton0() {
//   const [counter, setCounter] = useState(0);
//   function handleIncrease() {
//     setCounter(counter + 1);
//   }

//   let handleDecrease = () => {
//     setCounter(counter - 1);
//   };

//   let reset = () => {
//     setCounter(counter == 0);
//   };
//   return (
//     <>
//       {counter} times <br />
//       <button onClick={handleIncrease}>increase </button> <br />
//       <button onClick={handleDecrease}>decrease</button> <br />
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// ? React Way

// import { useState } from "react";

// function CounterButton() {
//   const [counter, setCounter] = useState(0);
//   let increase = () => {
//     setCounter(counter + 1);
//   };
//   let decrease = () => {
//     setCounter(counter - 1);
//   };
//   let reset = () => {
//     setCounter(0);
//   };

//   return (
//     <>
//       {counter} times <br />
//       <button onClick={increase}>Increase</button> <br />
//       <button onClick={decrease}>decrease</button> <br />
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counter to show the use of useState</h1>
//       <CounterButton />
//     </div>
//   );
// }

// ! hooks

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      {/* <MyButton /> */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

