
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/books" component={Books} />
                <Route path="/book/new" component={NewBook} />
            </Switch>
        </BrowserRouter>
    );
}
