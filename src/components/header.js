import { NavLink , Link, Outlet } from "react-router-dom";
import headerStyle from './css/header.module.css'
import Footer from "./footer";

export default function Header () {
    return (
        <>
            <div className={headerStyle.box}>
                <div className={headerStyle.headBox}>
                    <h1 className={headerStyle.headText}>EaCamp Avto.az</h1>
                    <img src=""/>
                </div>
                <Link className={headerStyle.head}>
                    <NavLink to="/pages/about" className={headerStyle.link}>About</NavLink>
                    <NavLink to="/pages/contact" className={headerStyle.link}>Elave Et</NavLink>
                    <NavLink to="/" className={headerStyle.link}>Home</NavLink>
                </Link>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}