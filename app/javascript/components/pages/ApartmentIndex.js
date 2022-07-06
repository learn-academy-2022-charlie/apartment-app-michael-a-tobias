import React, { Component } from 'react'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("INDEX", apartments)
    return (
      <h3>ApartmentIndex</h3>
    )
  }
}
