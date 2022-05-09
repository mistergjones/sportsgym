import Carousel from "../Components/Carousel";
import YoutubeSection from "../Components/YoutubeSection";
import Testimonial from "../Components/Testimonial";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h3>Home</h3>
            <Carousel />

            <YoutubeSection />
            <Testimonial />
            <Features />
            {/* <Footer /> */}
        </div>
    );
}
