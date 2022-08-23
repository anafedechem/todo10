import React, { StrictMode } from 'react';
import S from './Header.module.css';
import { Link } from 'react-router-dom';
import shitzu from './shitzu.png';

const Header = () => {
  return (
    <div className={S.container}>
        <nav>
            {/* navegar para cadastro */}
            <Link className={S.link} to='/Cadastro'>
                <img className={S.ShitzuImg} src={shitzu} alt="" />
            </Link>
            {/* navegar para home */}
            <Link className={S.link} to='/'>Home</Link>
        </nav>
    </div>
  )
}

export default Header