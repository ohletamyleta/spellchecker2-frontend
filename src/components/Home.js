import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import bard from '../assets/bard.jpg';
import cleric from '../assets/cleric.png';
import druid from '../assets/druid.jpg';
import paladin from '../assets/paladin.jpg';
import ranger from '../assets/ranger.jpg';
import sorcerer from '../assets/sorcerer.jpg';
import warlock from '../assets/warlock.png';
import wizard from '../assets/wizard.jpg';




   const Home = () => {
     return (
   <div id='outer'>

            <div className='text-center' id='inner_fixed'>
              <h1>Welcome to Spellchecker!</h1>
              <br></br>
              <br></br>
              <h3>You can view all of the spells in the library</h3>
              <br></br>
              <br></br>
              <h3><em>or even add new homebrew creations!</em></h3>
           

   <Carousel fade>
   <Carousel.Item>
     <img
      className="d-block w-100"
      src={bard}
      width="300"
      height="700"
      alt="Bard"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Bard</h3>
      <p><strong>The magical performer</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    src={cleric}
      width="300"
      height="500"
      alt="Cleric"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Cleric</h3>
      <p>Powered by the divine</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     src={druid}
      width="300"
      height="500"
      alt="Druid"
    />

    <Carousel.Caption>
      <h3>Druid</h3>
      <p>Nature's magical guardian</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
       src={paladin}
      width="750"
      height="500"
      alt="Paladin"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Paladin</h3>
      <p>Righteous magic wielder</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
     src={ranger}
      width="750"
      height="500"
      alt="Ranger"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Ranger</h3>
      <p>Civilizations' defender</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
   src={sorcerer}
      width="750"
      height="500"
      alt="Sorcerer"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Sorcerer</h3>
      <p>Born into magic</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
    src={warlock}
      width="750"
      height="500"
      alt="Warlock"
    />
    <Carousel.Caption style={{color: "black"}}>
      <h3>Warlock</h3>
      <p>Magic by agreement</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
     src={wizard}
      width="750"
      height="500"
      alt="Wizard"
    />
    <Carousel.Caption>
      <h3>Wizard</h3>
      <p>Magic through study</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>
</div> 
)};

export default Home;
                
