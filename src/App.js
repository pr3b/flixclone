import React from 'react'
import './App.css';
import './components/Row.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './components/movie/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Favorite from './components/Favorite';
import Movie from './components/Movie';
import { GlobalStyle } from './components/FavoriteCardElements';


function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Banner />
        <GlobalStyle />
          <Switch>
            <div className="App">
              <Route path ='/' exact component={Movie} />
              <Route path ='/favorite' exact component={Favorite} />
            </div>
          </Switch>
      </Router>
    </Provider>
    </>
  );
}

export default App;
