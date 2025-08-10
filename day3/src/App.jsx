//import logo from './logo.svg';
import './App.css';
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

// import Form from './intermediate/Form.jsx';
import Parent from './intermediate/LiftingUp/Parent.jsx';
//import UncontrolledInputs from './intermediate/UncontrolledInputs.jsx';
//import ControlledInputs from './intermediate/ControlledInputs.jsx';
function App() {
  return (
    <div className="App">
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
      </BrowserRouter> */}
      <Parent />

      
    </div>
  );
}

export default App;
