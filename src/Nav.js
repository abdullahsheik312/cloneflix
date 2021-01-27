import React, {useState,useEffect} from 'react';
import './Nav.css';
function Nav() {

    const [show, handleShow]=  useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100) 
                   handleShow(true);
            else
                handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://fontmeme.com/permalink/210126/081521d52867dc16877fcba89fb738fc.png"
            alt="Clonflix Logo"
            />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar Logo"
            />  

            
        </div>
    )
}

export default Nav
