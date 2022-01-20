// import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Works from "./components/Works";

function App() {
  return (
    <div >
      <Navigation/>
      <Header/>
      <Stack/>
      <Works/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
