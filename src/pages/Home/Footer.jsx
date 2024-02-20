import { BsGithub, BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-low pt-5 pb-4 text-white">
            <div className="text-center bg-[#222]">
                <figure className="">
                    <img src="/pngwing.com.png" className="mx-auto -m-2 w-12" alt="" />
                </figure>
                <p className="font-semibold md:text-sm text-xs pb-1">
                    - Brandify -
                </p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
            </div>
            <p className="text-center md:text-base text-xs">Showroom Name: Brandify Showrooms LTD
                </p>
                <p className="text-center md:text-base text-xs">
                Address: 1234 Al-Elm Street, Cityville, UAE, Qatar
                </p>
            <p className="text-center mt-4 mb-3 md:text-base text-sm">Social</p>
            <div className="flex justify-center gap-4 md:text-xl text-sm">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsGithub />
            </div>
            <small className="text-center block text-gray-500 mt-4">Service Policy & Terms and conditions</small>
            <small className="text-gray-400 text-center block mt-2">All rights reserved from Brandify</small>
        </footer>
    );
};

export default Footer;