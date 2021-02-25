import Main from './components/Main/Main.jsx';
import Employees from './components/Employees/Employees.jsx';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = () => {
    const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
        <Route path={'/'} component={Main}/>
        <Route path={'/employees'} component={Employees}/>
    </BrowserRouter>
  );
}

export default App;
