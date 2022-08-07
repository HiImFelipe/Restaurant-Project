import "./App.css";
import { Header } from "./components/header/Header";
import { menuOptions } from "./config";

function App() {
  return (
    <div className="app">
      <Header menuOptions={menuOptions} />
    </div>
  );
}

export default App;
