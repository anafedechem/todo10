import React from 'react'
import S from './Home.module.css'
import shitzu from '../../Components/Header/shitzu.png';

const Home = () => {
  return (
    <div>
      <img className={S.ShitzuImg} src={shitzu} alt="" />
    </div>
  )
}

export default Home