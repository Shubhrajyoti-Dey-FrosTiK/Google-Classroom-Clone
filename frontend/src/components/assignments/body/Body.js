import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';
import { Button } from 'react-bootstrap';


export default function Body() {
    return (
        <>
        <div style={{marginLeft:"10%",marginBottom:"15px"}}>
            <Button variant="outline-info" style={{color:"black"}}>Create Assignment</Button>
        </div>
        <div>
            {window.Assignments.map(function(name, index){
                    return <Task data={window.Assignments[index]}/>
            })}
        </div>
        </>
    )
}
