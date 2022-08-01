import React from "react";
import {Link} from "react-router-dom";
import S from './Home.module.css'
import Icon1 from '../../assets/icon1.jpg'
import Icon2 from '../../assets/icon2.jpg'
import Icon3 from '../../assets/icon3.jpg'
import Icon4 from '../../assets/icon4.jpg'
import Icon5 from '../../assets/icon5.jpg'

const Home = () => {
  return (
    <div className={S.content}>
      <h1>Escolha sua entidade:</h1>
      <nav className={S.navBar}>
        <Link to='/' className={S.link}>
          <img src={Icon1} alt="" className={S.imagem}/>
          <h3>Filmes</h3>
        </Link>
        <Link to='/' className={S.link}>
          <img src={Icon2} alt="" className={S.imagem}/>
          <h3>Series</h3>
        </Link>
        <Link to='/' className={S.link}>
          <img src={Icon3} alt="" className={S.imagem}/>
          <h3>Animações</h3>
        </Link>
        <Link to='/' className={S.link}>
          <img src={Icon4} alt="" className={S.imagem}/>
          <h3>Clientes</h3>
        </Link>
        <Link to='/' className={S.link}>
          <img src={Icon5} alt="" className={S.imagem}/>
          <h3>Assinaturas</h3>
        </Link>
      </nav>
    </div>
  );
};

export default Home;