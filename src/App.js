import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';


function App() {
  return (
   <Router>
     {/* <Header /> */}
     <Switch>
       {/* <Route path='/portfolio'>
         <Portfolio />
       </Route>
       <Route path='/contact'>
         <Contact /> */}
       {/* </Route> */}
       <Route path='/'>
         <Home />
       </Route>
     </Switch>
    {/* //  <Footer /> */}
   </Router>
  );
}

export default App;
