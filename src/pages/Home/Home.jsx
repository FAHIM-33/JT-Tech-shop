import Banner from "./Banner/Banner";
import Brands from "./Brands";
import Locations from "./Locations";
import FeaturedCategory from "./Featured/FeaturedCategory";
import Join from "./Join";
import Footer from "./Footer";
import Featured from "./Featured";
import ContactUs from "./ContactUs";
import Comments from "./Comments/Comments";
import Goalsss from "./Goals/Goalsss";
import DummySection from "./DummySection";
import Dummy2 from "./Dummy2";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <Brands></Brands>
                <FeaturedCategory></FeaturedCategory>
                <Locations></Locations>
                <h2 className="text-center text-2xl lg:text-5xl  lg:mb-8 text-low bg-fadegray p-2 w-full">Special offers!</h2>
                <DummySection></DummySection>
                <Dummy2></Dummy2>
                <Join></Join>
                <Featured></Featured>
                <ContactUs></ContactUs>
                <Comments></Comments>
                <Goalsss></Goalsss>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Home;