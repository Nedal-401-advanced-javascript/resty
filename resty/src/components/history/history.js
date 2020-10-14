import React from 'react';
import { Link } from 'react-router-dom'
import Result from '../results/results'




export default props=>{
    let history=JSON.parse(localStorage.getItem(`history`))||[];
    let historyList= history.map((his,i)=><li onClick={props.handleHistory} id={i}> {his.method} {his.URL}</li>)

return (
    <>
        <Result/>
        <ul className="historyList">{historyList}</ul>
    </>
    )
}
