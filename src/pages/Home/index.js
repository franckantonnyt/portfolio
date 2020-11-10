import React from 'react';

import Card from '../../components/Card';

//icons
import CSS from '../../assets/icons/CSS3.png';
import Nodejs from '../../assets/icons/nodejs.png';
import Apollo from '../../assets/icons/apollo.png';
import ReactJs from '../../assets/icons/reactJs.png';
import GraphQL from '../../assets/icons/graphQL.png';
import JavaScript from '../../assets/icons/javaScript.png';
import TypeScript from '../../assets/icons/typeScript.png';
import ReactNative from '../../assets/icons/react native.png';
import StyledComponents from '../../assets/icons/styledComponentsIcon.png';
//Logos
import BeTheHero from '../../assets/images/BeTheHero2.png';
import Proffys from '../../assets/images/logoproffys2.png';
import Happy from '../../assets/images/happyBackground.png';
import PokemonGraphQl from '../../assets/images/pokemonGraphQl.png';

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
                  iconFour={StyledComponents}
                  percentageThree='85%'
                  percentageFour='13%'
                  descriptionProject='Aplicação que possibilita ONGs que precisam de ajuda em determinados casos encontrem pessoas dispostas a ajudar.'
                  gitHubRepository='https://github.com/franckantonnyt/Semana_OmniStack_11/tree/master/FrontEnd'
                />
              </div>
              <div className='child-card-container project-two'>
                <Card
                  iconOne={ReactNative}
                  iconTwo={JavaScript}
                  logo={Proffys}
                  projectName='Proffys'
                  iconThree={TypeScript}
                  iconFour={CSS}
                  percentageThree='90%'
                  percentageFour='10%'
                  descriptionProject='Aplicação que facilita criar e regular aulas, podendo colocar informações sobre as aulas, o custo e horário das aulas.'
                  gitHubRepository='https://github.com/franckantonnyt/Proffys'
                />
              </div>
              <div className='child-card-container project-three'>
                <Card
                  iconOne={ReactJs}
                  iconTwo={TypeScript}
                  logo={Happy}
                  projectName='Happy'
                  iconThree={Nodejs}
                  iconFour={CSS}
                  percentageThree='55%'
                  percentageFour='45%'
                  descriptionProject='O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.'
                  gitHubRepository='https://github.com/franckantonnyt/HappyWeb'
                />
              </div>
              <div className='child-card-container project-four'>
                <Card
                  iconOne={ReactJs}
                  iconTwo={GraphQL}
                  logo={PokemonGraphQl}
                  projectName='Pokemon GraphQL'
                  iconThree={Apollo}
                  iconFour={CSS}
                  percentageThree='85%'
                  percentageFour='15%'
                  descriptionProject='Projeto que lista pokemons, utilizando GraphQl, Apollo e React para fazer as requisições em uma api.'
                  gitHubRepository='https://github.com/franckantonnyt/FrontEnd_GraphQl'
                />
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
