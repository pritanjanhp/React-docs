// ! 1st
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

// ! 2nd

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

// ! 3rd

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;


// conditional ? operator. Unlike if, it works inside JSX:
<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;


// When you don’t need the else branch
<div>{isLoggedIn && <AdminPanel />}</div>;
