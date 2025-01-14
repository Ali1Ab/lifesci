"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Industries', path: '#industries' },
        { name: 'Expertree', path: '#expertree' },
        { name: 'Contact Us', path: '#contact' },
    ];



    return (
        <header className="fixed w-full blue-bg z-40">
            <div className="container mx-auto py-2">
                <div className="flex justify-between items-center py-[10px] px-[20px]">
                    {/* Logo */}
                    <div className="text-yellow-400 font-bold text-2xl">
                        {/* <BannerLogo color="yellow" /> */}
                        <Image src="/imgs/expertree.png" width={300} height={200} alt="LifeSci Logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 m-0 list-none">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <div className="h-8">
                                        <Link
                                            href={link?.path}
                                            className="proxima  text-white yellow-hover"
                                        >
                                            {link?.name}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white border-0"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Get Started Button (Desktop) */}
                    <a
                        href="#contact"
                        className="hidden md:block px-8 py-4 btn-prm "
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <nav className="mt-3 pb-3 px-[30px]">
                            <ul className="flex flex-col space-y-3 list-none">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.path}
                                            className="proxima hover:text-yellow text-white "
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>


                                    <a
                                        href="#contact"
                                        className="hidden md:block px-8 py-4 btn-prm "
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get in Touch
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;