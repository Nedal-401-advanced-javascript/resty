import React from 'react';
// import logo from './logo.svg';
import Form from './components/form/form';
import Results from './components/results/results';
import './app.scss';

const Header = ()=> <header><h1>RESTy</h1></header>;
const Footer = ()=> <footer>2020 codefellows</footer>;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:'',
      results:null
    }
  }

  updateResult=(count,results)=>{
    this.setState({count,results})
// Store the URL, Method, and the Body (if any)



// Store only unique, successful queries
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Form handelResult={this.updateResult}/>
        <Results sendCount={this.state.count} sendResults={this.state.results}/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
