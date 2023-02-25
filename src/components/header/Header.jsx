import React from 'react'
import Ekala from '../../assets/images/logo.svg'
import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'
function Header() {
    return (
        <div>
            <div className="header">
                <div className="scontainer flex">
                    <div className="logo">
                        <img height={30} src={Ekala} alt="" />
                    </div>
                    <div className="search flex">
                        <AiOutlineSearch />
                        <input type="text" placeholder='Search....' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header