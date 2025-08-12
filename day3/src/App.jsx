//import logo from './logo.svg';
import './App.css';
import UseMemoExample from './intermediate/UseMeno.jsx';
//import TimerApp from './intermediate/TimerApp';
// import Demo from './fundamentals/Demo.jsx'; 
// import Func_comp from './fundamentals/Func_comp.jsx';
// import ProductDisplay from './ProductDisplay .jsx';
// import Props_demo from './Props_demo.jsx';
// import Button from './fundamentals/Button.jsx';
// import Counter from './fundamentals/Counter.jsx';
// import Handling from './fundamentals/Handling.jsx';
// import ConditionalRendering from './fundamentals/ConditionalRendering.jsx';
// import Toggle from './Toggle.jsx';
// import Map from './Map.jsx';
// import CounterApp from './fundamentals/CounterPrj.jsx';
// import TodoApp from './ToDo.jsx';
// import CalculatorApp from './fundamentals/Calculator.jsx';
//import UseEffect from './intermediate/UseEffect';
// import LifeCycle from './intermediate/LifeCycle.jsx';
// import Home from './intermediate/Home.jsx';
// import {BrowserRouter , Routes,Route,Link} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreatePost from './intermediate/Blog/CreatePost.jsx';
// import PostDetail from './intermediate/Blog/PostDetail.jsx';
// import Navbar from './intermediate/Blog/components/Navbar.jsx';
// import Home from './intermediate/Blog/Home.jsx';
// import { useState } from 'react';
import UseRef from './intermediate/UseRef.jsx';
import UseRefExample from './intermediate/UseRefExample.jsx';
import UseMeno from './intermediate/UseMeno.jsx';
// import Form from './intermediate/Form.jsx';
//import Parent from './intermediate/LiftingUp/Parent.jsx';
//import UncontrolledInputs from './intermediate/UncontrolledInputs.jsx';
//import ControlledInputs from './intermediate/ControlledInputs.jsx';
function App() {


  //   const [posts, setPosts] = useState([
  //     { id: 1, title: "First Post", content: "This is my first blog post" },
  //     { id: 2, title: "Second Post", content: "This is my second blog post" }
  // ]);
  return (
    <div className="App">

      <UseMeno />

      {/* <UseRef/>
      <UseRefExample /> */}

{/* 
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
      </Routes>
    </Router> */}
      {/* <Demo />
      <Func_comp name= " thara" isLoggedIn="true"/>
      <ProductDisplay/>
      <Props_demo name="tharani" length={10}/>
      <Props_demo name="madam" length={20}/>
      <Props_demo name="Sister" length={30}/>

      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
      <Button label="Submit" onClick={() => alert('Form Submitted!')} />
      <Button label="Tharani" onClick={() => alert('Tharani go ahead')} /> 
      <Counter />
      <Handling />
      <ConditionalRendering/>
      <Toggle />
      <Map />*/}
      
      {/* <CounterApp />
      <TodoApp />
      <CalculatorApp/> 
      <UseEffect />*/}
      
      {/* <TimerApp /> */}


      {/* <UncontrolledInputs /> */}/
      {/* <Form /> */}
      {/* <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/lifecycle">Life Cycle</Link>
          <Link to="/timer">Timer App</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/timer" element={<TimerApp />} />
        </Routes>
      </BrowserRouter> 
      <Parent />
*/}
      
    </div>
  );
}

export default App;
