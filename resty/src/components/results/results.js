import React from 'react';
import ReactJson from 'react-json-view'
import './results.scss'

const Results = (props) => {
    console.log(">>>>>>>>>>",props);
    if (props.sendCount) {
    
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