import './header.css';
import { useState } from 'react';

function Header({ activePage }) {
    const [active, setActive] = useState(1);

    const updatePage = (newPage) => {
        setActive(newPage)
        activePage(newPage)

    }


    return (
        <header className='header'>
            <p className='logo-space'>@sharinganzinho</p>
            <div className='nav-bar'>
                <a style={{ color: active == 1 && 'white' }} onClick={() => updatePage(1)}>Página principal</a>
                <a style={{ color: active == 2 && 'white' }} onClick={() => updatePage(2)}>Sobre mim</a>
                <a style={{ color: active == 3 && 'white' }} onClick={() => updatePage(3)}>Cadastre-se</a>
            </div>
        </header >
    );
}

export default Header;