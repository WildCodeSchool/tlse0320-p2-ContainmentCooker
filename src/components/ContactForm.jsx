import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = props => {
  return (
    <Form>
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
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" /> I want to the get the monthly newsletter
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default ContactForm;
