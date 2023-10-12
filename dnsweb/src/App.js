import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// install router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './components/Blog';


function App() {
  return (
    <>
 <Router>
  <Navbar/>
  <Page1/>

<Switch>

<Route path='/' Component={Page1}/>

</Switch>

  <Footer/>
 </Router>
     
    </>
  );
}

export default App;
