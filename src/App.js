import './App.css';
import Header from './Components/Header/Header.js';
import { Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth.js';
import Todos from './Components/Todos/Todos.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </div>
  );
}

export default App;
