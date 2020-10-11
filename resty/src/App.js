import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const Header = ()=> <header><h1>RESTy</h1></header>;
const Footer = ()=> <footer>2020 codefellows</footer>;
class Main extends React.Component{
  constructor(){
    super();
    this.state={
      url:'',
      method:'',
      choices:[]
    }
  }
  handleUrlInput=e=>{
    let url = e.target.value;
    this.setState({url})
    // console.log(this.url);
  }
  handleClick=e=>{
    e.preventDefault()
    let choices = `${this.state.method} ${this.state.url}`;
    this.setState({ choices: [...this.state.choices, choices] })
    this.state.choices.push(choices)
    // this.setState({choices})
    // console.log(this.choices);
  }
  handleMethod=e=>{
  // console.log(this.method);
  let method= e.target.value;
  this.setState({method});
  console.log(this.state.method);

  }

  render(){
  return(
    <section>
      <form>
        <label  for="fname">URL</label>
        <input onChange={this.handleUrlInput} type="text" id="fname" name="fname"/><br/>
        <button onClick={this.handleClick}>GO</button><br/>

        <input onChange={this.handleMethod} type="radio" name="method" value="get"/>
        <label for="get">get</label>
        <input onChange={this.handleMethod} type="radio" name="method" value="post"/>
        <label for="post">post</label>
        <input onChange={this.handleMethod} type="radio" name="method" value="put"/>
        <label for="put">put</label>
        <input onChange={this.handleMethod} type="radio" name="method" value="delete"/>
        <label for="delete">delete</label>
     </form>

     <h3>{this.state.choices}</h3>
    </section>

  )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
