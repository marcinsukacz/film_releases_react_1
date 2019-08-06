import React, { Component } from "react";


class Film extends Component {
  render(){
    return (
      <div className="film">
        <a href={this.props.film.url}>{this.props.film.name}</a>
      </div>
    );
  }
}

export default Film;
