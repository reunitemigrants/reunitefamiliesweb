import React from 'react';

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
      <form>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} onChange={(text) => this.handleChange(text, 'firstName')} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} onChange={(text) => this.handleChange(text, 'lastName')} />
        </label>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={(text) => this.handleChange(text, 'city')} />
        </label>
      </form>
    )
  }
}
