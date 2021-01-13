import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // @TODO: Replace with official enzyme react 17 adapter when it's ready. - Ryan Potter 13/01/2021

Enzyme.configure({ adapter: new Adapter() });
