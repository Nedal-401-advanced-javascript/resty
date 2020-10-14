import React from 'react';
// import logo from './logo.svg';
import Form from './components/form/form';
import Results from './components/results/results';
import './app.scss';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import History from './components/history/history'

const Footer = ()=> <footer>2020 codefellows</footer>;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:'',
      results:null,
      history:[],
    }
  }


  updateResult=(count,results)=>{
    this.setState({count,results});
    // this.setState({count,results: [...this.state.results, results]})
    // Store the URL, Method, and the Body (if any)



    // Store only unique, successful queries
  }
  // componentDidMount(){
  // }
  handleHistory=e=>{
    e.preventDefault();
    let storedRequst = JSON.parse(localStorage.getItem('history'))[e.target.id]
    console.log(storedRequst);
    this.updateResult(storedRequst.body.count,storedRequst.body);
  }

  render() {
    return (
      <React.Fragment>
          <Header/>
            <Switch>
            <Route exact path='/'>
              <Form handelResult={this.updateResult}/>
              <Results sendCount={this.state.count} sendResults={this.state.results}/>
            </Route>
            <Route exact path='/history' component={History}>
              <History  handleHistory={this.handleHistory}/>
              <Results sendCount={this.state.count} sendResults={this.state.results}/>
            </Route>
            </Switch>
          <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
