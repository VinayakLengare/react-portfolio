import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
       <About />
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;
