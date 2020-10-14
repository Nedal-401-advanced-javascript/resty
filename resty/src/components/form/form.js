'use strict';
import React from 'react';
import superagent from 'superagent';
import './form.scss'
import History from '../history/history'
import {If, Then, Else} from '../IF/if';


class Form extends React.Component{
    constructor(props){
      super(props);
      this.state={
        url:'',
        method:'get',
        body:null,
        choices:[],
        loading: false,
        open: false
  
      }
    }
    handleUrlInput=e=>{
      let url = e.target.value;
      this.setState({url})
    }
    fillBody=e=>this.setState({body:e.target.value})
    handleClick=async(e)=>{
      e.preventDefault()
      this.toggleLoading();

      let reqMethod=this.state.method 
      let choices = `${reqMethod}:${this.state.url}`;
      this.setState({ choices: [...this.state.choices, choices] })
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
      let historyLocalStorge=JSON.parse(localStorage.getItem(`history`))||[]
      let historyObj={
        id:Date.now(),
        method:this.state.method,
        URL:this.state.url,
        body:jsonData.body
      }
      historyLocalStorge.push(historyObj)
      localStorage.setItem(`history`,JSON.stringify(historyLocalStorge));
      this.toggleLoading();

    }
    handleMethod=e=>{
      let method= e.target.value;
      this.setState({method});
      console.log(this.state.method);
    }

    handleHistory=e=>{
      e.preventDefault()

      // this.toggleLoading();

      console.log('result of the event : ',e.target.textContent);
      let storedRequst = JSON.parse(localStorage.getItem(`${e.target.value}`));
      console.log("storedRequst : ",storedRequst);
      this.props.handelResult(storedRequst.body.count,storedRequst.body)
      // this.toggleLoading();

    }
    toggleModal = () => {
      this.setState({open: !this.state.open});
  }
  toggleLoading = () => {
    this.setState({loading: !this.state.loading})
}
  
    render(){
      // let historyList= this.state.choices.map((req,i)=><li onClick={this.handleHistory} id={req.id}>{req}</li>)
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
                  <label for="delete">delete</label><br/>
                  <textarea onChange={this.fillBody} rows="4" cols="50"></textarea>
            </form>
            <div className={`loading-${this.state.loading}`}></div>

            <h3>{this.state.choices}</h3>
          <aside>
            <If condition={this.state.open}>
            <Then>
                <History title="History Modal" close={this.toggleModal}>
                <button onClick={this.toggleModal}>/\</button>
                </History>
            </Then>
            <Else>
                <button onClick={this.toggleModal}>Open History!! </button>
            </Else>
            </If>

          </aside>

        </section> 
    
      )
    }
  }

export default Form;
