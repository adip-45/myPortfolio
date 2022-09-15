import "./App.css";
import HeadersComponent from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import WorkEx from "./Components/BodyComponents/WorkEx";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";

function App() {
  return (
    <>
	<h1>This is testing backdating</h1>
      <HeadersComponent />
      <AboutUs />
      <WorkEx />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
