import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"


const PCnav = () => {
    let theme = 'p'
    let user = null
    let loading
    let logOut
    let handleTheme

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/addProduct"><li>Add product</li></NavLink>
        <NavLink to="/myCart"><li >My cart</li></NavLink>
    </>

    return (
        <div className="hidden md:flex bg-mid py-1 items-center px-1 text-back">
            <div className="flex-1 ">
                <Link to='/' className="flex w-fit items-center gap-2">
                    <img src="/pngwing.com(1).png" className="w-10 " alt="broken logo" />
                    <p className="text-2xl font-semibold text-back">Tech shop</p>
                </Link>
            </div>

            <ul className="flex pl-12 items-center justify-end gap-4 font-semibold p-2">
                <div>
                    <button className="text-back text-3xl p-1 btn rounded-full block" onClick={handleTheme}>
                        {theme == 'dark' ? <BsFillSunFill></BsFillSunFill>
                            :
                            <BsFillMoonFill></BsFillMoonFill>
                        }
                    </button>
                </div>
                {
                    links
                }

            </ul>

            {
                user?.email ?
                    <div className="flex items-center gap-2">
                        {loading || <img className="w-10 border block rounded-full" src={user?.photoURL} alt="" />}
                        <button onClick={logOut} className="px-2 text-high bg-back btn py-1 w-fit">Logout</button>
                    </div>
                    :
                    <Link className="login" to="/login"><button className="px-2 py-2 text-high bg-back btn h-full w-fit">Login</button></Link>
            }
        </div>
    );
};

export default PCnav;