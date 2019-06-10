import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'web-audio-test-api';

configure({ adapter: new Adapter() });
