import React from 'react';
import Logo from '../../assets/img/devflix.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

const Menu = () => {



    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
        </Button>
        </nav>
    );
}

export default Menu;