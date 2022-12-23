import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Members from "./components/Members";
import Announcements from "./components/Announcements";
import Events from "./components/Events";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto relative">
        <Navbar />
        <Header />
        <About />
        <Members />
        <Announcements />
        <Events />
        <Media />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
// Change
