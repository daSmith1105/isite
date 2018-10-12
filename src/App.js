import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import history from './history';
import Login from './components/login';
import Dashboard from './components/dashboard';
import './App.css';

const sites = [
  'birch',
  'gte'
];


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      site: '',
      error: false,
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  
  }

 handleSubmit(e) {
   e.preventDefault();

   if(sites.includes(this.state.site)) {
    this.setState({
      error: false,
      loading: true
    });
     history.push('/dashboard');
   } else {
    this.setState({ 
      error: true },
      function(){
        setTimeout(() => {
          this.setState({
            error: false
          })
        }, 10000);
      });
   }
 };

 handleChange(e) {
    let value = e.target.value;
    this.setState({
      site: value.trim()
    });
 };


  render() {
    return (
        <div className="App">
          <Route exact path="/" 
                 render={ () => <Login handleSubmit={this.handleSubmit} 
                                       handleChange={this.handleChange} 
                                       site={this.state.site}
                                       error={this.state.error} /> } 
          />
          <Route exact path="/dashboard" 
                 render={ () =>  <Dashboard siteName={this.state.site.toUpperCase()} /> }
          />
        </div>
    );
  }
}

export default App;
