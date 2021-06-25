import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" exact component={AdminRoom} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
