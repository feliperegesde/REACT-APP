import { useNavigate } from 'react-router-dom';
import videoImage from './assets/2956744.png';
import audioImage from './assets/image.png';
import bateryImage from './assets/image2.png';
import sensorImage from './assets/image3.png';
import wifiImage from './assets/image4.png';
import touchImage from './assets/image5.png';
import mouseImage from './assets/image6.png';
import memoriaImage from './assets/image7.png';
import React, { FC } from 'react';

const Card: FC = () => {
  const navigate = useNavigate();

  const secondPage = () => {
    navigate('/pagina2');
  };

  return (
    <div className="content">
      <div className="card">
        <img className="card-image" src={videoImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={audioImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={bateryImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={sensorImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={wifiImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={touchImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={mouseImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <div className="card">
        <img className="card-image" src={memoriaImage} alt="profile_picture" />
        <button className="button_card1" onClick={secondPage}></button>
      </div>

      <hr />
    </div>
  );
};

export default Card;

