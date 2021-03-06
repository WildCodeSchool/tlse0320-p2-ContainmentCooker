import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ContactForm.css';

const ContactForm = props => {
  return (
    <Form className="Form">
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
        <FormText color="muted">
          Tell us want we need to know or send us a new recipe you want us to add !
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile"></Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" /> I want to the get the monthly newsletter
        </Label>
      </FormGroup>
      <button type="submit" className="ButtonForm">
        Submit
      </button>
    </Form>
  );
};

export default ContactForm;
