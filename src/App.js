import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import DNApp from './Components/DNApp/DNApp'
import AJResume from './Components/AJResume/AJResume'
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ajcStyles.css'



function App() {
  return (
  <>
<Router>
<Route path="/" exact component={Landing} />
<Route path="/DNApp" exact component={DNApp} />
<Route path="/AJResume" exact component={AJResume} />
<Footer />
</Router>
  </>
  );
}

export default App;
