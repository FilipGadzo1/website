import React from "react";

export interface NavBarProps{

}

const NavBar: React.FC<NavBarProps> = ({

}: NavBarProps): React.ReactElement => {

    const navText = [
        {text: "About", link: "#about"},
        {text: "Portfolio", link: "#portfolio"},
        {text: "Projects", link: "#projects"}
    ]

    const navLinks = navText.map((links) => 
        <div className="w-full block lg:flex lg:items-center lg:w-auto pr-20">
            <div className="font-semibold hover:bg-red-400 p-2">
                <a href={links.link} className="block lg:inline-block lg:mt-0">
                    {links.text}
                </a>
            </div>
        </div>
    )

    return(
        <nav className="flex items-center p-4">
            {navLinks}
        </nav>
    )
}

export default NavBar;