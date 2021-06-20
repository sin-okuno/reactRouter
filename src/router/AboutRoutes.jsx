import { About } from "../About";
import { AboutParam } from "../AboutParam";

export const aboutRoutes = [
  {
    path: "/",
    exact: true,
    children: <About />
  },
  {
    path: "/:id",
    exact: false,
    children: <AboutParam />
  }
];
