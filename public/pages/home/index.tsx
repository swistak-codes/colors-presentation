import * as preact from "preact";
import { Routes } from "../../routes";

export const Home = () => (
  <nav>
    <ul>
      {Object.entries(Routes).map(([key, data]) => (
        <li>
          <a href={data.path} key={key}>
            {data.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
