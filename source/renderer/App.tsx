import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { VaultManagement } from "./components/VaultManagement";

export function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <VaultManagement />
                </Route>
            </Switch>
        </Router>
    );
}
