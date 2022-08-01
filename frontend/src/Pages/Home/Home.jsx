import React from "react";
import {Link} from "react-router-dom";
import Icon1 from '../../assets/icon1.jpg'
import Icon2 from '../../assets/icon2.jpg'
import Icon3 from '../../assets/icon3.jpg'
import Icon4 from '../../assets/icon4.jpg'
import Icon5 from '../../assets/icon5.jpg'

const Home = () => {
  return (
    <div>
      <h1>Escolha sua entidade:</h1>
      <nav>
        <Link to='/'>
          <img src={Icon1} alt="" />
        </Link>
        <Link to='/'>
          <img src={Icon2} alt="" />
        </Link>
        <Link to='/'>
          <img src={Icon3} alt="" />
        </Link>
        <Link to='/'>
          <img src={Icon4} alt="" />
        </Link>
        <Link to='/'>
          <img src={Icon5} alt="" />
        </Link>
      </nav>
    </div>
  );
};

export default Home;