import React from 'react';
import './App.css';
import Home from './components/Home';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';
// http://example.com/about
// http://example.com/#/about
// <Link ===> history.push <Redirect  ==> history.replace

// The <Route> component is the most important component in React router. It renders some UI if the current location matches the route’s path. Ideally, a <Route> component should have a prop named path, and if the pathname is matched with the current location, it gets rendered.

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/:id" render={() => (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)} />
      </Switch>

      {/* children. The children prop is similar to render in that it expects a function that returns a React element. However, children gets rendered regardless of whether the path is matched with the location or not. */}
      {/* 
      If the router’s path and the location are successfully matched, an object is created and we call it the match object. The match object carries more information about the URL and the path. This information is accessible through its properties, listed below: */}
      {/* 
match.url. A string that returns the matched portion of the URL. This is particularly useful for building nested <Link>s
match.path. A string that returns the route’s path string — that is, <Route path="">. We’ll be using this to build nested <Route>s.
match.isExact. A boolean that returns true if the match was exact (without any trailing characters).
match.params. An object containing key/value pairs from the URL parsed by the Path-to-RegExp package. */}



    </div>
  );
}

export default App;
