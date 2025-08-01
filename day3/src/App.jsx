import logo from './logo.svg';
import './App.css';
import Demo from './Demo.jsx'; 
import Func_comp from './Func_comp.jsx';
import ProductDisplay from './ProductDisplay .jsx';
import Props_demo from './Props_demo.jsx';
import Button from './Button.jsx';

function App() {
  return (
    <div className="App">
      <Demo />
      <Func_comp name= " thara" isLoggedIn="true"/>
      <ProductDisplay/>
      <Props_demo name="tharani" length={10}/>
      <Props_demo name="madam" length={20}/>
      <Props_demo name="Sister" length={30}/>

      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
      <Button label="Submit" onClick={() => alert('Form Submitted!')} />
      <Button label="Tharani" onClick={() => alert('Tharani go ahead')} />
    </div>
  );
}

export default App;
