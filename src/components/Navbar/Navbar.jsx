import React, { useState } from "react";
import './navbar.css'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '10%', height: '10vh' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} >
                    </div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <a href="/mainpage">
                    <img src="../imagenes/logoB.jpg" className="img-logo" alt="" width={"150px"} />
                </a>
            </nav>

            <div className={menu_class}>
                <li>
                    <a href="">
                        <h3>Contacto</h3>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Navbar