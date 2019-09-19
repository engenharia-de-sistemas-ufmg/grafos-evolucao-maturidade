import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import OptionsEditor from './OptionsEditor';

describe('OptionsEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <OptionsEditor
        lang="pt"
        options={{ height: '500px' }}
        updateOptions={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
