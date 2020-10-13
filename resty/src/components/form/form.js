'use strict';
import React from 'react';
import superagent from 'superagent';
import './form.scss'

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state={
        url:'',
        method:'get',
        choices:[]
  
      }
    }
    handleUrlInput=e=>{
      let url = e.target.value;
      this.setState({url})
    }
    handleClick=async(e)=>{
      e.preventDefault()
      let reqMethod=this.state.method 
      let choices = `${reqMethod} ${this.state.url}`;
      this.setState({ choices: [...this.state.choices, choices] })
      // console.log(this.state)
      this.state.choices.push(choices)
      let jsonData;
      switch (reqMethod) {
        case 'delete':
           jsonData= await superagent.del(`${this.state.url}`)
          break;
        case 'post':
          jsonData= await superagent.post(`${this.state.url}`);
          break;
        case 'put':
          jsonData= await superagent.put(`${this.state.url}`);
          break;
        default:jsonData= await superagent.get(`${this.state.url}`)
          break;
      }
      

      let count = jsonData.body.count; 
      this.props.handelResult(count,jsonData.body)
      // store the query parameters in local storage
      localStorage.setItem('req',JSON.stringify({
        method:this.state.method,
        URL:this.state.url,
        body:jsonData.body
      }));

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