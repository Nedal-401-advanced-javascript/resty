'use strict';
import React from 'react';
import './form.scss'

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state={
        url:'',
        method:'',
        choices:[]
  
      }
    }
    handleUrlInput=e=>{
      let url = e.target.value;
      this.setState({url})
    }
    handleClick=async(e)=>{
      e.preventDefault()
      let choices = `${this.state.method} ${this.state.url}`;
      this.setState({ choices: [...this.state.choices, choices] })
      this.state.choices.push(choices)
      let data = await fetch(`${this.state.url}`)
      let jsonData=await data.json()

      let count = jsonData.count; 

      this.props.handelResult(count,jsonData)

    }
    handleMethod=e=>{
    let method= e.target.value;
    this.setState({method});
    console.log(this.state.method);
  
    }
  
    render(){
    return(
    <section>
        <form>
          <label  for="fname">URL</label>
          <input onChange={this.handleUrlInput} type="text" id="fname" name="fname"/>
          <button onClick={this.handleClick}>GO</button><br/>
  
          <input onChange={this.handleMethod} type="radio" name="method" value="get" checked="checked"/>
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

export default Form;