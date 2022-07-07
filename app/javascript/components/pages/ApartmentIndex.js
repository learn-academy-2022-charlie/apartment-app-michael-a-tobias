import React, { Component } from 'react'
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
        <h3>ApartmentIndex</h3>
        <div>
          {apartments && apartments.map((value, index) => {
            return (
              <Card key={index}>
                <CardImg top style={{ width: '10rem' }} src={value.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Address: {value.street}</CardTitle>
                  <CardSubtitle>{value.city}</CardSubtitle>
                  <CardText>{value.state}</CardText>
                  <CardText>Manager: {value.manager}</CardText>
                  <CardText>Price: {value.price}</CardText>
                  <CardText>Bedrooms: {value.bedrooms}</CardText>
                  <CardText>Bathrooms: {value.bathrooms}</CardText>
                  <CardText>Allows pets:{value.pets}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            )
          })
          }
        </div>
      </>
    )
  }
}

