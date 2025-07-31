import logo from './logo.svg';
import './App.css';
import Demo from './Demo.jsx'; 
import Func_comp from './Func_comp.jsx';
import ProductDisplay from './ProductDisplay .jsx';
import Props_demo from './Props_demo.jsx';

function App() {
  return (
    <div className="App">
      <Demo />
      <Func_comp name= " thara" isLoggedIn="true"/>
      <ProductDisplay/>
      <Props_demo name="tharani" length={10}/>
      <Props_demo name="madam" length={20}/>
      <Props_demo name="Sister" length={30}/>
    </div>
  );
}

export default App;
