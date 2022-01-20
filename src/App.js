import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Stack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
