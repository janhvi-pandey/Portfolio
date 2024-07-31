import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Home/Navbar";
// import Footer from "./Home/Footer";

function App() {
  document.body.style.background = "#fdfefe "; // lighter complementary colors

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div className="container">
        <Home />
        {/* <Footer /> */}
      </div>
      
    </div>
  );
}

export default App;
