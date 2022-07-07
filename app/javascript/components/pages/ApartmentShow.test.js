// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow renders", () => {
  let apartment = {
    bathrooms: 1,
    bedrooms: 1,
    city: "New Foundland",
    created_at: "2022-07-06T23:09:23.605Z",
    email: "peter67@yahoo.com",
    id: 1,
    image: "https://thiscatdoesnotexist.com/",
    manager: "Peter Petigrew",
    pets: "No",
    price: "$250,000",
    state: "ND",
    street: "123 Snoring Ln.",
    updated_at: "2022-07-06T23:09:23.605Z",
    user_id: 1
  }


  let apartmentShow
  beforeEach(() => {
    apartmentShow = shallow(<ApartmentShow apartment={apartment} />)
  })

  it("displays a card", () => {
    const apartmentShowRender = apartmentShow.find('Card')
    expect(apartmentShowRender.length).toEqual(1)
  })
})