import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Main from 'pages/main/main';
import News from 'pages/news/news';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/news">News page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
