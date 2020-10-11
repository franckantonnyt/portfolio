import React from 'react';

import { Container } from './styles';

const Card = ({
  logo,
  projectName,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  percentageThree,
  percentageFour,
}) => {
  return (
    <Container>
      <div className='background-card-modal'>
        <div className='header-card-modal'>
          <div className='header-img-card'>
            <div className='header-details-card'>
              <p>CDA</p>
              <img
                className='img-first-child'
                src={iconOne}
                alt='Tecnologia Utilizada'
              />
              <img src={iconTwo} alt='Tecnologia Utilizada' />
            </div>
            <div className='header-img'>
              <img src={logo} alt='Projeto BeTheHero' />
            </div>
          </div>
          <p className='header-title-card'>{projectName}</p>
        </div>
        <div className='body-card-modal'>
          <div className='details-card-modal'>
            <div className='details-card-left'>
              <img src={iconThree} alt='Tecnologia Utilizada' />
              <p>{percentageThree}</p>
            </div>
            <div className='details-card-right'>
              <img src={iconFour} alt='Tecnologia Utilizada' />
              <p>{percentageFour}</p>
            </div>
          </div>
          <div className='details-card-description'></div>
          <div className='details-card-footer' />
        </div>
      </div>
    </Container>
  );
};

export default Card;
