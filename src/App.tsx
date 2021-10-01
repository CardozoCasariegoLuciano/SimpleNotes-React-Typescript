import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SearchProvider from "./context/searchContext";
import UserProvider from "./context/userContext";
import FormNotes from "./pages/FromNotes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <SearchProvider>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/newnote" component={FormNotes} />
                <Route exact path="/edit/:id" component={FormNotes} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </SearchProvider>
  );
}

export default App;
