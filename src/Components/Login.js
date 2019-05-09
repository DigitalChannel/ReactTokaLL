import React from 'react';
import serializeForm from 'form-serialize'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as ChannelAPi from '../utils/ChannelsAPI'

export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }

    handleSubmit = (e) => {
        e.preventDefault()
        const form_data = serializeForm(e.target, {hash: true})
        
        const form_data_final = {
            ...form_data,
            origin: 0,
           remoteIpAddress: "1.0.0.34"
        }
        console.log('data To Send' + JSON.stringify(form_data_final))
        this.submitData(form_data_final)
    }
   
    submitData = (post_body) => {
        ChannelAPi.loginUser(post_body)
           .then((data) => {
               console.log('data returned' + JSON.stringify(data))
           })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleChange}  />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange}  />
                    </Col>
                    </FormGroup>
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                    </FormGroup>
                </Form>
        );
    }
}