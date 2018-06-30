import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class ChildProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text, stateField) {
    this.setState({
      [stateField]: text.target.value
    })
  }

  render() {
    return(
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" value={this.state.firstName} onChange={(text) => this.handleChange(text, 'firstName')} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" value={this.state.lastName} onChange={(text) => this.handleChange(text, 'lastName')} />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input type="text" value={this.state.city} onChange={(text) => this.handleChange(text, 'city')} />
        </FormGroup>
      </Form>
    )
  }
}
