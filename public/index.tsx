import * as preact from "preact";
import {
  LocationProvider,
  Router,
  Route,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import { NotFound } from "./pages/_404";
import { Routes } from "./routes";

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <Router>
            <Route path={Routes.home.path} component={Routes.home.component} />
            <Route
              path={Routes.greyscale.path}
              component={Routes.greyscale.component}
            />
            <Route
              path={Routes.greyscaleAdjusted.path}
              component={Routes.greyscaleAdjusted.component}
            />
            <Route
              path={Routes.twoTone.path}
              component={Routes.twoTone.component}
            />
            <Route
              path={Routes.brightness.path}
              component={Routes.brightness.component}
            />
            <Route
              path={Routes.contrast.path}
              component={Routes.contrast.component}
            />
            <Route
              path={Routes.gamma.path}
              component={Routes.gamma.component}
            />
            <Route
              path={Routes.inversion.path}
              component={Routes.inversion.component}
            />
            <Route
              path={Routes.solarization.path}
              component={Routes.solarization.component}
            />
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
