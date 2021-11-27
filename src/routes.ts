import Gamma from "./routes/gamma";
import GreyscaleAdjusted from "./routes/greyscale-adjusted";
import Brightness from "./routes/brightness";
import Greyscale from "./routes/greyscale";
import Inversion from "./routes/inversion";
import Contrast from "./routes/contrast";
import TwoTone from "./routes/twotone";
import Solarization from "./routes/solarization";

export const ROUTES = {
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
