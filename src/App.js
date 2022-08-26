import "./App.css";
import MainPage from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import NavL from "./components/Lateralnav/NavL";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <NavL />
    </div>
  );
}

export default App;
