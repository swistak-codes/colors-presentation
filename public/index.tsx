import * as preact from "preact";
import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import { NotFound } from "./pages/_404";

const Greyscale = lazy(() => import("./pages/greyscale"));

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <Router>
            <Route path="/greyscale" component={Greyscale} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
