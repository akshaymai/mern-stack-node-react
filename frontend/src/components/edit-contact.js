import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditContact extends Component {

  constructor(props) {
    super(props)

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
    this.onChangeContactAddress = this.onChangeContactAddress.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      name: '',
      email: '',
      phone: '',
      address:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contact/edit-contact/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          address:res.data.address
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeContactName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeContactEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeContactPhone(e) {
    this.setState({ phone: e.target.value })
  }
  onChangeContactAddress(e){
    this.setState({address:e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address:this.state.address
    };

    axios.put('http://localhost:5000/contact/update-contact/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Contact successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/contact-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeContactName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeContactEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" value={this.state.phone} onChange={this.onChangeContactPhone} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeContactAddress} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Contact
        </Button>
      </Form>
    </div>);
  }
}