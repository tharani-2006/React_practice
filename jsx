JSX (JavaScript XML) is a syntax extension for JavaScript used with React. 
It looks like HTML, but functions like JavaScript

 Without JSX:

React.createElement("h1", null, "Hello World")

With JSX:

<h1>Hello World</h1>

✅ Why use JSX?
It's cleaner and easier to write.

You can mix HTML-like structure with JavaScript logic.

It makes your UI code more readable and maintainable.

✅ 3. Functional Components vs Class Components
🔸 Functional Components (Modern, Simple)

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
🔸 Class Components (Older, Verbose)

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Feature	                            Functional Component	Class Component
Simpler syntax	                            ✅	                ❌
this keyword	                              ❌                	✅
Hooks support (useState, useEffect)	        ✅	                ❌ (older way)
Recommended in React 18+	                  ✅	                ❌





DAY2

✅ 5. Prop Drilling
Prop drilling is when you pass data through many components even if only the deepest one uses it.

 