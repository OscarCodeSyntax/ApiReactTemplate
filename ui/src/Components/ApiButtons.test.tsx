import React from "react";
import ApiButtons from "./ApiButtons";
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BasicQueries from "../Resources/DataService/BasicQueries";



describe('Api Buttons ', () => {

 beforeEach(()=>{

    jest.resetAllMocks();
 })

 it('renders correctly', () => {
    const tree = renderer
    .create(<ApiButtons />)
    .toJSON();
  expect(tree).toMatchSnapshot();
 });

//  it('renders correct buttons with text', () => {

//     const  api= shallow(<ApiButtons />);

//  }
//  )

})