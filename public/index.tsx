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
import { Home } from "./pages/home";

const Greyscale = lazy(() => import("./pages/greyscale"));
const GreyscaleAdjusted = lazy(() => import("./pages/greyscale-adjusted"));
const TwoTone = lazy(() => import("./pages/twotone"));

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/greyscale" component={Greyscale} />
            <Route path="/greyscale-adjusted" component={GreyscaleAdjusted} />
            <Route path="/twotone" component={TwoTone} />
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
