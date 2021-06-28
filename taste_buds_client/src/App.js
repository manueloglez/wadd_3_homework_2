import React, { useEffect, useState } from "react";
import { User, Session, Recipe, Review } from "./requests";
import WelcomePage from './components/WelcomePage'
import NavBar from "./components/Navbar";
import RecipeIndexPage from './components/RecipeIndexPage'
import RecipeShowPage from './components/RecipeShowPage'
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
  const [appState, setAppState] = useState({ user: null })
  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setAppState(state => {
          return { user }
        })
      }
    })
  }
  const destroySession = () => {
    Session.destroy().then((res) => {
      setAppState((state) => {
        return { user: null };
      });
    });
  }
  const handleSubmit = (params) => {
    Session.create(params)
      .then(() => {
        return Session.currentUser();
      })
      .then((user) => {
        console.log("user", user);
        setAppState((state) => {
          return { user: user };
        });
      });
  }
  const onSignOut = () => {
    setAppState({
      user: null
    })
  }
  useEffect(() => {
    getCurrentUser()
  }, [])

  return <div className="App">
    <BrowserRouter>
    <NavBar currentUser={appState.user} destroySession={destroySession}/>
    <Switch>
      <Route exact path="/recipes" component={RecipeIndexPage}/>
      <Route exact path="/" component={WelcomePage}/>
    </Switch>
    </BrowserRouter>
  </div>
}

export default App;
