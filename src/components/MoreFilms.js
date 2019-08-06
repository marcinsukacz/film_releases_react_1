import React, {Component} from 'react';

class MoreFilms extends Component {
render(){
  return(
    <div className='more-films'>
      <a href={'http://www.imdb.com/calendar/?region=gb'}>
      View more upcoming films
      </a>
    </div>
    )
  }
}

export default MoreFilms;
