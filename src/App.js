import './App.css';
import Header from './Components/Header/Header.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth.js';
import Todos from './Components/Todos/Todos.js';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
        <Route exact path="/">
          {!user && <Redirect to="/auth/sign-in" />}
          {user && <Redirect to="/todos" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
