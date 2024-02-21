import Banner from "./Banner/Banner";
import Brands from "./Brands";
import Locations from "./Locations";
import FeaturedCategory from "./Featured/FeaturedCategory";
import Join from "./Join";
import Footer from "./Footer";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">

            <FeaturedCategory></FeaturedCategory>
            <Brands></Brands>
            <Locations></Locations>
            <Join></Join>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Home;