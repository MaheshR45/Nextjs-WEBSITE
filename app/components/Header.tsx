'use client';

import { usePathname } from "next/navigation";
import { basePath } from "@/base-config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainRoute, menusList } from "../data/menus";

export default function HeaderSection() {
    const pathname = usePathname();
    const [headerClass, setHeaderClass] = useState('wrapper bg-gray');

    useEffect(() => {
        if (pathname.includes('/index') || pathname === '/') {
            setHeaderClass('wrapper bg-gray');
        } else {
            setHeaderClass('wrapper bg-gray fixed-header');
        }
    }, [pathname]);

    return (
        <div className=" bg-pale-primary">
            <div className="content-wrapper">
                <header className="wrapper">
                    <nav className="navbar navbar-expand-lg classic  ">
                        <div className="container flex-lg-row flex-nowrap align-items-center">
                            {/* Logo */}
                            <div className="navbar-brand w-100">
                                <Link href={mainRoute}>
                                    <img src={`${basePath}/libs/images/logo.png`} srcSet={`${basePath}/libs/images/logo@2x.png 2x`} alt="Smydata Logo" />
                                </Link>
                            </div>

                            {/* Collapse menu */}
                            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                                <div className="offcanvas-header d-lg-none">
                                    <h3 className="text-white fs-30 mb-0">Smydata</h3>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                {/* Menu List */}
                                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                    <ul className="navbar-nav">
                                        {menusList.map((menuItem, idx) =>
                                            menuItem.hasSubmenus ? (
                                                <li key={`menu-${idx}`} className="nav-item dropdown">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        {menuItem.menu}
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        {menuItem.submenus.map((subMenu, subIdx) => (
                                                            <li key={`submenu-${idx}-${subIdx}`}>
                                                                <Link className="dropdown-item" href={subMenu.link}>
                                                                    {subMenu.menu}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ) : (
                                                <li key={`menu-${idx}`} className="nav-item">
                                                    <Link
                                                        href={menuItem.link}
                                                        className={`nav-link ${menuItem.isBtn ? 'btn btn-sm btn-primary rounded-pill' : ''}`}
                                                    >
                                                        {menuItem.menu}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* Offcanvas Footer (Mobile View) */}
                                    <div className="offcanvas-footer d-lg-none mt-auto">
                                        <div>
                                            <a href="mailto:info@smydata.com" className="link-inverse">info@smydata.com</a><br />
                                            +1 214-(884)-5649
                                            <nav className="nav social social-white mt-4">
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                                <a href="#"><i className="uil uil-dribbble"></i></a>
                                                <a href="#"><i className="uil uil-instagram"></i></a>
                                                <a href="#"><i className="uil uil-youtube"></i></a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className="navbar-other w-100 d-flex ms-auto">
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    {/* <li className="nav-item dropdown language-select text-uppercase">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  En
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">En</a></li>
                  <li><a className="dropdown-item" href="#">De</a></li>
                  <li><a className="dropdown-item" href="#">Es</a></li>
                </ul>
              </li> */}
                                    <li className="nav-item d-none d-md-block">
                                        <Link href="/contact" className="btn btn-sm btn-primary rounded-pill">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-item d-lg-none">
                                        <button className="hamburger offcanvas-nav-btn"><span></span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}
