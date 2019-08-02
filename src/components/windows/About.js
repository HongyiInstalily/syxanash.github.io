import React, { Component } from 'react';
import moment from 'moment';

import aboutIcon from '../../resources/icons/about.gif';
import avatarPicture from '../../resources/images/myavatar.gif';

import './About.css';

class AboutHeader extends Component {
  render = () => (
    <span>
      <img src={ aboutIcon } alt='about' style={ { height: '15px' } }/> About
    </span>
  )
}

class AboutBody extends Component {
  state = {
    timePassed: '',
  };

  getDateDiff = () => {
    const now = moment();
    const then = moment([2017, 5, 15]);
    const years = now.diff(then, 'year');

    const timePassed = `${years} years`;
    this.setState({ timePassed });
  }

  componentDidMount() {
    this.getDateDiff();
  }

  render = () => {
    const { timePassed } = this.state;
    return (<div className='about-window'>
      <div className='text-container'>
        <img src={ avatarPicture } alt='my avatar' className='avatar-picture' />
        <span style={ { fontWeight: 'bold', fontSize: '1.5em' } }>Hello there!</span>
        <p>
          I'm <b>Simone</b>, pronounced like `<i>see-mow-nay</i>`<br />
          on internet my nick name is usually <b>syx</b>.
        </p>
        <p>
          I was born in <a href='https://en.wikipedia.org/wiki/Taranto' target='_blank' rel='noopener noreferrer'>Taranto (Italy)</a> <span role="img" aria-label="italian-flag">🇮🇹</span> where I lived most of my life. I moved to Dublin Ireland <span role="img" aria-label="irish-flag">🇮🇪</span> { timePassed } ago where I currently work as a full stack software engineer.
          I have a degree in computer science from <a href='https://www.uniba.it/ricerca/dipartimenti/informatica/dipartimento-di-informatica' target='_blank' rel='noopener noreferrer'>University of Bari</a>.
        </p>
        <p>
          On my free time I like to practice inline skating and roam around the streets of Dublin on my <a href='https://www.rollerblade.com/products/metroblade/' target='_blank' rel='noopener noreferrer'>Rollerblades</a>.
        </p>
        <p>
          I'm passionate about retrocomputing.
          When I get the chance I collect old computers from the
          80s and I'm really fond of skeuomorphic design of 90s and early 2000s UIs.
        </p>
      </div>
    </div>);
  }
}

export { AboutHeader, AboutBody };
