import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("INDEX", apartments)
    return (
      <>
        <h3>All Listings</h3>
        <div>
          {apartments && apartments.map((value, index) => {
            return (
              <Card key={index}>
                <CardImg top style={{ width: '10rem' }} src={value.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Address: {value.street}</CardTitle>
                  <CardSubtitle>City: {value.city}</CardSubtitle>
                  <CardText>State: {value.state}</CardText>
                </CardBody>
                <NavItem>
                  <a href={`/apartmentshow/${value.id}`} className="nav-link">Details</a>
                </NavItem>
              </Card>
            )
          })
          }
        </div>
      </>
    )
  }
}

