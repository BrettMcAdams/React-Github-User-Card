import React from 'react';
import axios from 'axios'
import './App.css';
import Card from './components/Card'
import Followers from './components/Followers'

class App extends React.Component {

  state = {
    gCard: [],
    cardText: '',
    error: '',
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/BrettMcAdams')
      .then(res => {
        this.setState({
          gCard: res.data
        });
      })
      .catch(err => console.log(err));
    axios
      .get('https://api.github.com/users/BrettMcAdams/followers')
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  // event handlers

  handleChanges = e => {
    this.setState({
      cardText: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.cardText}`)
      .then(res => {
        this.setState({
          gCard: res.data,
          error: ''
        });
      })
      .catch(err => {
        this.setState({
          error: 'Looks like we could not find that profile. Please try again'
        });
      });
    this.setState({
      cardText: ''
    })

    axios
      .get(`https://api.github.com/users/${this.state.cardText}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Card</h1>
          <form>
            <input
              type="text"
              value={this.state.doggoText}
              onChange={this.handleChanges}
              placeholder='Please Enter a Username'
            />
            <button type="submit" onClick={this.onSubmit}>Submit</button>
          </form>
          <Card gCard={this.state.gCard} />
          <Followers followers={this.state.followers} cardText={this.state.cardText} />
        </header>
      </div>
    );
  }
}

export default App;
