import React, { useEffect } from "react";
import { Form, Button } from 'react-bootstrap'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from './google.png'
import { Link } from "react-router-dom";
import {authorize, myaxios} from '../../connections'
import { useAlert } from 'react-alert'
export default function Signup({ setLoggedIn }) {
    const alert = useAlert()
    const onSignup = async function(e) {
        e.preventDefault()
        const first_name = document.querySelector("#firstname").value
        const last_name = document.querySelector("#lastname").value
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const cpassword = document.querySelector("#cpassword").value
        const data = {
            first_name,
            last_name,
            email,
            password,
            username
        }
        
        const options = {
            method: 'post',
            url: 'auth/register/', 
            headers: {
              'Content-Type': 'application/json'
            },
            data
        }
        if(first_name && last_name && username && email && password && cpassword) {
            if(password == cpassword) {
                try {
                    const res = await myaxios(options)
                    authorize(res.data.token, setLoggedIn)
                    localStorage.setItem('token', res.data.token)
                    console.log(res)
                } catch(err) {
                    console.log(err)
                    console.log(err.response)
                    if(err.response.data.email[0] === "Email already exists!") {
                        alert.show("An account with this email already exists")
                    } else {
                        if(err.response.data.username[0] === "Username already exists!") {
                            alert.show("This User name is already taken!")
                        }
                    }
                }

            } else {
                alert.show("Passwords do not match!!")
            }
        } else {
            alert.show("Please provide the required credentials")
        }        

    }

    return (
        <div className="containerdiv">
            <div className="formdiv">
                <Form id="#myform">
                    <div className="formheaders" style={{display:"flex", justifyContent:"center"}}>
                        <h2>SignUp</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" id="firstname" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" id="lastname" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" id="email" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>UserName: </Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" id="username" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password: </Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" id="cpassword" />
                    </Form.Group>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button onClick={onSignup}>
                            Sign Up
                        </Button>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div style={{width:"200px", display:"flex", alignItems:"center", justifyContent:"center", marginRight:"5px"}}>
                            <div style={{borderBottom:"1px solid black", width:"100%"}}>
                            </div>
                        </div>
                        <h3>OR</h3>
                        <div style={{width:"200px", display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"5px"}}>
                            <div style={{borderBottom:"1px solid black", width:"100%"}}>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button variant="primary"><img src={Google} height="20px" width="20px" style={{marginRight:"2px"}}/>Signup with Google</Button>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Link to="/login" style={{textDecoration:"none"}}>Already have an account? Login In</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}