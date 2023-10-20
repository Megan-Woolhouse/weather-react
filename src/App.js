import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        <p className="code-link">
          <a href="https://github.com/Megan-Woolhouse/weather-react">
            Open-source code
          </a>
          by Megan Woolhouse
        </p>
      </footer>
    </div>
  );
}
