import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const arrayLinks = [{
        name: 'Главная',
        link: '/',
        },
        {
            name: 'Сотрудники',
            link: '/employees'
        }];

    return (
        <header className="header">
            <ul className="header-links">
            {

                arrayLinks.map((item, index) => {
                    return <Link key={index} to={item.link}><li className="header-links-item">{item.name}</li></Link>
                })
            }
           </ul>
        </header>
    )
};

export default Header;
