import React from 'react';

import Card from '../../components/Card';

//icons
import CSS from '../../assets/icons/CSS3.png';
import Nodejs from '../../assets/icons/nodejs.png';
import ReactJs from '../../assets/icons/reactJs.png';
import GraphQL from '../../assets/icons/graphQL.png';
import JavaScript from '../../assets/icons/javaScript.png';
import TypeScript from '../../assets/icons/typeScript.png';
import ReactNative from '../../assets/icons/react native.png';
//Logos
import BeTheHero from '../../assets/images/BeTheHero2.png';
import Proffys from '../../assets/images/logoproffys2.png';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <div className='background-grass'>
        <div className='field-marking'>
          <div className='field-marking-left'>
            <div className='field-marking-area-left'></div>
            <div className='field-marking-center-left'></div>
          </div>
          <div className='field-marking-center'>
            <div className='child-cirle-container'>
              <div className='child-card-container project-one'>
                <Card
                  iconOne={ReactJs}
                  iconTwo={Nodejs}
                  logo={BeTheHero}
                  projectName='Be The Hero'
                  iconThree={JavaScript}
                  iconFour={CSS}
                  percentageThree='85%'
                  percentageFour='13%'
                />
              </div>
              <div className='child-card-container project-two'>
                <Card
                  iconOne={ReactNative}
                  iconTwo={TypeScript}
                  logo={Proffys}
                  projectName='Proffys'
                  iconThree={JavaScript}
                  iconFour={CSS}
                  percentageThree='84%'
                  percentageFour='53%'
                />
              </div>
              <div className='child-card-container project-three'>
                <Card />
              </div>
              <div className='child-card-container project-four'>
                <Card />
              </div>
              <div className='child-circle-center'>
                <div className='child-circle-center-children' />
              </div>
            </div>
          </div>
          <div className='field-marking-right'>
            <div className='field-marking-center-right'></div>
            <div className='field-marking-area-right'></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
