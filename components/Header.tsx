import Netflix from "../assets/svgs/netflix.svg"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }
        // console.log(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && ' bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">

                <a href="/">
                    <img src="https://rb.gy/ulxxee" alt="netflix logo" width="100" height="100" />
                </a>

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden sm:inline w-6 h-6" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className=" w-6 h-6" />
                <Link href="/account">
                    <img src="https://rb.gy/g1pwyx" alt="account icon" className="cursor-pointer rounded" />
                </Link>
            </div>

        </header>
    );
}

export default Header;