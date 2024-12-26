# React-docs

React apps are made out of components. <br/>
A component is a piece of the UI that has its own logic and appearance. <br/>
A component can be as small as a button, or as large as an entire page.<br/>

React components are JavaScript functions that return markup
<br/>


# Hooks
### Syntax 
const [count, setCount] = useState(0); <br/>
we get two things from useState:    <br/>
    the current state (count), and <br/>
    the function that lets you update it (setCount). <br/>

You can give them any names, but the convention is to write [something, setSomething].

The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter: