'use client';

import { usePathname } from "next/navigation";
import { basePath } from "@/base-config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainRoute, menusList } from "../data/menus";

export default function HeaderSection() {

    const pathname = usePathname();
    const [headerClass, setHeaderClass] = useState('header_base');

    useEffect(() => {
        console.log(pathname);
        if (pathname.includes('/index') || pathname === '/') {
            setHeaderClass('white_header fixed-header'); // header_base
        } else if (pathname.includes('/contact')) {
            setHeaderClass('white_header');
        } else {
            setHeaderClass('white_header fixed-header');
        }
    }, [pathname]);

    return (
        <header className={headerClass}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href={mainRoute}>
                        <img src={`${basePath}/libs/images/SmydataLogo.png`} alt="image" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <div className="toggle-wrap">
                                <span className="toggle-bar"></span>
                            </div>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {menusList.map((menuItem, idx) => (
                                menuItem.hasSubmenus ? (
                                    <li key={`menu-${idx}`} className="nav-item has_dropdown">
                                        <a className="nav-link" href="#">{menuItem.menu}</a>
                                        <span className="drp_btn">
                                            <i className="icofont-rounded-down"></i>
                                        </span>
                                        <div key={`sub_menu-${idx}`} className="sub_menu">
                                            <ul>
                                                {menuItem.submenus.map((subMenu, subIdx) => (
                                                    <li key={`submenu-${idx}-${subIdx}`}>
                                                        <Link href={subMenu.link}>{subMenu.menu}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ) : (
                                    <li key={`menu-${idx}`} className={`nav-item ${menuItem.isActive ? 'active' : ''}`}>
                                        <Link
                                            href={menuItem.link}
                                            className={`nav-link ${menuItem.isBtn ? 'dark_btn' : ''}`}
                                        >
                                            {menuItem.menu}
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}