import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ContactTableRow from './contact-table';


export default class ContactList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contact')
      .then(res => {
        console.log('my all contact list',res.data)
        this.setState({
          contacts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    
    return this.state.contacts.map((res, i) => {
      return <ContactTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}