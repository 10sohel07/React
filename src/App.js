import './App.css';
import {NavBar} from './myComponent/navBar';
import {ItemList} from './myComponent/itemList';
import { Contact } from './myComponent/contact';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import { About } from './myComponent/about';
import { Login } from './myComponent/login';
import { AddTodo } from './myComponent/addTodo';
function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";
  return (
    <>
    <Router>
    <NavBar name={name1} name1={name2}/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/home" element={<ItemList/>}/>

    </Routes>
    </Router>

      
      
    </>
  );
}
export default App;