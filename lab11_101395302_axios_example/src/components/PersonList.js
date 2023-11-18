import axios from 'axios';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


export default class PersonList extends Component {

    constructor(props) {
        super(props)
        //Define state default values
        this.state = {
            persons: []
        }

    }

  componentDidMount() {
      //axios.get(`https://randomuser.me/api/?results=10`)
      //    .then(res => {
      //        console.log(res.data);
      //        const persons = res.data.results;
      //        this.setState({ persons });
      //})
      this.fetchAllUser();
    }

    fetchAllUser = async () => {
        try {
            var res = await axios.get(`https://randomuser.me/api/?results=10`)
            console.log(res.data)
            this.setState({
                ...this.state,
                persons: res.data.results
            })
        } catch (error) {
            console.log(error);
        }
    }


  render() {
      return (
          <div> 
              {this.state.persons.map(person =>
                  <div style={{
                      backgroundColor: '#1BA9C0',
                      padding: 10,
                      margin: 10,
                  }}>
                  <tr>
                          <td colspan="3"><strong>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</strong></td>
                  </tr>
                  <tr>
                          <td rowspan="9" style={{ textAlign: 'center' }}>
                              <img class="rounded-circle" src={person.picture.large} alt="" style={{ padding: 10 }}  />
                              <br />
                              <button class="btn btn-primary">Detail</button>
                          </td>
                          <td style={{ textAlign: 'right', padding: 10, verticalAlign: 'top' }}>
                              <tr>User Name:</tr>
                              <tr>Gender:</tr>
                              <tr>Time Zone Description:</tr>
                              <tr>Address:</tr>
                              <tr>Email:</tr>
                              <tr>Birth Date and Age:</tr>
                              <tr>Register Date:</tr>
                              <tr>Phone#:</tr>
                              <tr>Cell#:</tr>
                      </td>
                          <td style={{ textAlign: 'left', padding: 10, verticalAlign: 'top' }}>
                              <tr><strong>{person.login.username}</strong></tr>
                              <tr>{person.gender.toUpperCase()}</tr>
                              <tr>{person.location.timezone.description}</tr>
                              <tr>{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</tr>
                              <tr>{person.email}</tr>
                              <tr>{person.dob.date} ({person.dob.age})</tr>
                              <tr>{person.registered.date}</tr>
                              <tr>{person.phone}</tr>
                              <tr>{person.cell}</tr> 
                          </td>
                      </tr>
                  </div>
              )}
             
          </div>
    )
  }
}
