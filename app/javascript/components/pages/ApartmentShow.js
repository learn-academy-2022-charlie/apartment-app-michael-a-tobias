import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ApartmentShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }
  render() {
    const { apartment } = this.props
    console.log("SHOW", apartment)
    return (
      <>
        {apartment &&
          <Card>
            <CardImg top style={{ width: '10rem' }} src={apartment.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>Address: {apartment.street}</CardTitle>
              <CardSubtitle>{apartment.city}</CardSubtitle>
              <CardText>{apartment.state}</CardText>
              <CardText>Manager: {apartment.manager}</CardText>
              <CardText>Price: {apartment.price}</CardText>
              <CardText>Bedrooms: {apartment.bedrooms}</CardText>
              <CardText>Bathrooms: {apartment.bathrooms}</CardText>
              <CardText>Allows pets: {apartment.pets}</CardText>
            </CardBody>
            <NavItem>
              <a href={`/apartmentindex`} className="nav-link">Back</a>
            </NavItem>
          </Card>
        }
      </>
    )
  }
}
