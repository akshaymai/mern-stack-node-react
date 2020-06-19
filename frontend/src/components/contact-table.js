import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default class ContactTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact() {
        axios.delete('http://localhost:5000/contact/delete-contact/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.address}</td>
                <td>
                    <div className="match-space">
                    <Link className="edit-link" to={"/edit-contact/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteContact} size="sm" variant="danger">Delete</Button>
                    </div>
                </td>
            
            </tr>
        );
    }
}