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
    console.log(results);
    this.setState({count,results})
console.log(this.state.count, this.state.results);
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
