import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormNotes from "./pages/FromNotes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/newnote" component={FormNotes} />
        <Route exact path="/edit/:id" component={FormNotes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
