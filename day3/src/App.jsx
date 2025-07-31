import logo from './logo.svg';
import './App.css';
import Demo from './Demo.jsx'; 
import Func_comp from './Func_comp.jsx';
import ProductDisplay from './ProductDisplay .jsx';

function App() {
  return (
    <div className="App">
      <Demo />
      <Func_comp name= " thara" isLoggedIn="true"/>
      <ProductDisplay/>
    </div>
  );
}

export default App;
