import { lazy } from "preact-iso";
import { Home } from "./pages/home";

const Greyscale = lazy(() => import("./pages/greyscale"));
const GreyscaleAdjusted = lazy(() => import("./pages/greyscale-adjusted"));
const TwoTone = lazy(() => import("./pages/twotone"));
const Brightness = lazy(() => import("./pages/brightness"));
const Contrast = lazy(() => import("./pages/contrast"));
const Gamma = lazy(() => import("./pages/gamma"));
const Inversion = lazy(() => import("./pages/inversion"));
const Solarization = lazy(() => import("./pages/solarization"));

export const Routes = {
  home: {
    path: "/",
    title: "Główna",
    component: Home,
  },
  greyscale: {
    path: "/grayscale",
    title: "Skala szarości",
    component: Greyscale,
  },
  greyscaleAdjusted: {
    path: "/grayscale-adjusted",
    title: "Skala szarości (sterowana)",
    component: GreyscaleAdjusted,
  },
  twoTone: {
    path: "/twotone",
    title: "Tryb dwukolorowy",
    component: TwoTone,
  },
  brightness: {
    path: "/brightness",
    title: "Jasność",
    component: Brightness,
  },
  contrast: {
    path: "/contrast",
    title: "Kontrast",
    component: Contrast,
  },
  gamma: {
    path: "/gamma",
    title: "Korekcja gamma",
    component: Gamma,
  },
  inversion: {
    path: "/inversion",
    title: "Negatyw",
    component: Inversion,
  },
  solarization: {
    path: "/solarization",
    title: "Solaryzacja",
    component: Solarization,
  },
};
