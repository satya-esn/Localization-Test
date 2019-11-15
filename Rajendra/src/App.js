
import React, { Component } from 'react';

import LocalizedStrings from 'react-localization';

import data from "./db.json";
import './App.css';

let strings = new LocalizedStrings(data);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState(prevState => ({
      language: lang
    }))
  }

  render() {
    

    strings.setLanguage(this.state.language);
    return (
      
      <div className="app-container">
        Change Language: <select onChange={this.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="it">It- Italian</option>
        </select>
        <h2>{strings.welcome}</h2>
        <h4>{strings.day}</h4>
        <strong>{strings.life}</strong><br />
        <i>{strings.work}</i>
        

      </div>
    )
  }
}

