import { h } from "preact";
import NotFound from "../routes/_404";
import { ROUTES } from "../routes";
import { Router, Route } from "preact-router";
import { createHashHistory } from "history";

const App = () => (
  <div class="app">
    <Router history={createHashHistory() as any}>
      {Object.entries(ROUTES).map(([key, data]) => (
        <Route key={key} path={data.path} component={data.component} />
      ))}
      <Route default component={NotFound} />
    </Router>
  </div>
);

export default App;
