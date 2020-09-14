import React from 'react';

import Card from '../../components/Card';

//icons
import CSS from '../../assets/icons/CSS3.png';
import Nodejs from '../../assets/icons/nodejs.png';
import ReactJs from '../../assets/icons/reactJs.png';
import GraphQL from '../../assets/icons/graphQL.png';
import JavaScript from '../../assets/icons/javaScript.png';
//Logos
import BeTheHero from '../../assets/images/BeTheHero2.png';

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
                  iconTwo={Nodejs}
                  logo={BeTheHero}
                  iconOne={ReactJs}
                  projectName='Be The Hero'
                  iconFour={CSS}
                  iconThree={JavaScript}
                />
              </div>
              <div className='child-card-container project-two'>
                <Card
                  iconOne={GraphQL}
                  iconTwo={Nodejs}
                  logo={BeTheHero}
                  projectName='Be The Hero'
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
