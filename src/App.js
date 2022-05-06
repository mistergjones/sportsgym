import "./App.css";

import FixedHeader from "./Components/FixedHeader";
import Carousel from "./Components/Carousel";
import YoutubeSection from "./Components/YoutubeSection";
import Testimonial from "./Components/Testimonial";
import Features from "./Components/Features";

function App() {
    return (
        <div className="App">
            <FixedHeader />
            <Carousel />
            <YoutubeSection />
            <Testimonial />
            <Features />
        </div>
    );
}

export default App;
