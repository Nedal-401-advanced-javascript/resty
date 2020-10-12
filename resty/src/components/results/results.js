import React from 'react';
import ReactJson from 'react-json-view'
import './results.scss'

const Results = (props) => {
    if (props.sendCount) {
        console.log(">>>>>>>>>>",props.sendResults.results);
    
    return (
        <div id='nedal'>
            <ul>
                 <li>{props.sendCount}</li>
                 <li><ReactJson src={props.sendResults.results} /></li>
               
            </ul>
        </div>
       
    )
}else return null

}
export default Results;