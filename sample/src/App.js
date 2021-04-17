import './App.css';
import Login from './Components/Login/Login';
import Employee from './Components/Employee/Employee';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/employee">
              <Employee/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
