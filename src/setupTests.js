import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import actual from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

const axios = Object.assign(jest.fn(), actual);
global.adapter = new AxiosMockAdapter(axios, {
    delayResponse: 100,
});
