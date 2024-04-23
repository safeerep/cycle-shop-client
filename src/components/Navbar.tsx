import { Link } from "react-router-dom";
import { ModeToggle } from "@/shadcn/mode-toggle";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CgRing } from "react-icons/cg"

const Navbar = () => {
    return (
        <header className={`mx-auto sticky top-0 left-0 z-40 h-20 w-full overflow-hidden flex flex-col items-center justify-center border-b`}>
            <header className={`h-20 flex items-center justify-center  w-[90%] md:w-[85%] mx-auto`}>
                <div className="h-[90%] w-full  flex justify-between">
                    <div className="flex items-center gap-20">
                        <div className=" gap-10 hidden md:flex">
                            <Link to={"/"}>
                                <AiOutlineMenu className="text-2xl hover:text-red-600" />
                            </Link>
                            <Link to={"/"}>
                               <span className="font-bold hover:text-red-600">Home</span> 
                            </Link>
                            <Link to={"/"}>
                                <span className="hover:text-red-600">shop</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center text-2xl gap-4 ">
                        <div className="text-sm flex gap-10 items-center z-20">
                            <Link to={"/"}>
                                <CgRing className="text-2xl "/>
                            </Link>
                            <Link to={"/"}>
                                <span className="text-2xl font-bold hover:text-red-600">CYCLE</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center text-2xl gap-4 ">
                        <div className="text-sm flex gap-10 items-center z-20">
                            <Link to={"/"}>
                                <IoIosNotificationsOutline className="text-2xl hover:text-red-600"/>
                            </Link>
                            <div className="relative">
                                <div className="absolute  bottom-2 left-3 ">
                                    <span className="bg-red-600 text-white px-1 text-sm rounded-full">7</span>
                                </div>
                            <Link to={"/"}>
                                <AiOutlineShoppingCart className="text-2xl hover:text-red-600"/>
                            </Link>
                            </div>
                            <div className="h-8 w-8 rounded-full overflow-hidden ">
                                <img className="object-cover" src="/profile.jpg" alt="" />
                            </div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </header>
        </header>
    )
}

export default Navbar