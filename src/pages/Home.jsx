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
            {/* <h3 className="mt-4 mb-4">
                <div className="banner">
                    <div className="leftSide">POWER</div>
                    <div className="rightSide">GYM</div>
                </div>
            </h3> */}
            <Carousel />

            <YoutubeSection />
            <Testimonial />
            <Features />
            {/* <Footer /> */}
        </div>
    );
}
