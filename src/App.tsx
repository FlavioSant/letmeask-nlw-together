import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
