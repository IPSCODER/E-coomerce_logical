import './App.css';

import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Routes, Route}from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
<Router>
<Header/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/chekout" element={<Checkout/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>
</Router>
    </div>
  );
}

export default App;
