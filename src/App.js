import React, { Component } from 'react';
import './App.css';
import SearchWarning from './modules/searchWarning.js';
import thesaurusAPIcall from './thesaurusAPIcall.js';


class App extends Component {
  state = {
    regex: /^[A-Z]+$/i,
    badSearch: false
  }

  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Rude's Thesaurus</h1>
        <form id="thesaurus-search-form" onSubmit={this.handleSubmit}>
          <input type="text" name="word"/>
          <button type="subit">Submit</button>
        </form>
        <SearchWarning status={this.state.badSearch}/>

        {/* TODO: Move results into it's own component*/}
        {this.state.results && Object.keys(this.state.results).map(items => {
          return <div>{items}</div>
        })}
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    let word = e.target.children["word"].value;
    this.verify(word);
  }

  verify (word) {
    // Check word has content, trim whitespace
    (word) && (word = word.trim().toLowerCase());

    // Flag if not a single word (numeric characters, punctuation, or spaces)
    if (!this.state.regex.test(word)) {
      this.setState({badSearch: true})
      return;
    }

    // If passed above tests, word is good
    // Clear possible warnings
    this.setState({badSearch: false});

    console.log(`Word is: ${word}`);  // TODO: Delete this line

    // Submit word to API
    thesaurusAPIcall(word)
      .then(results => {
        console.log(results);
        this.setState({results})
      } )
  }

}

export default App;
