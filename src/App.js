import './App.css';
import Header from "./Components/HeadersComponents/Header";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
// npm i @material-ui/core @material-ui/icons

function App() {
 
  return (
    <div className="App">
      <>
       <Header />
       <AboutUs />
       <Portfolio />
       <Contact />
       <Footer /> 

      </>
        
    </div>
  );
}

export default App;
