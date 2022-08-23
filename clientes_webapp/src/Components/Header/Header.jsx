import React, { StrictMode } from 'react';
import S from './Header.module.css';
import { Link } from 'react-router-dom';
import shitzu from './shitzu.png';

const Header = () => {
  return (
    <div className={S.container}>
        <nav>
            {/* navegar para cadastro */}
            <Link className={S.HomeBtn} to='/'>
                {/* <img className={S.ShitzuImg} src={shitzu} alt="" /> */}
                <h1>HOME</h1>
            </Link>
        </nav>
    </div>
  )
}

export default Header