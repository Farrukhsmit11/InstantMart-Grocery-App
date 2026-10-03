import "./Navbar.css"
import { MdDirectionsBike } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="flex bg-white pt-sm pb-sm pt-xs border-bottom">
            <div className="container">
                <div className="nav-left flex gap-sm items-center">
                    <MdDirectionsBike />
                    <h1 className="font-size-md">InstantMart</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar