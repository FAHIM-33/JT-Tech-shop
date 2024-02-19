import MobileNav from "./MobileNav";
import PCnav from "./PCnav";

const Navbar = () => {
    return (
        <nav className="">
            <PCnav></PCnav>
            <MobileNav></MobileNav>
        </nav>
    );
};

export default Navbar;