import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/"></Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
