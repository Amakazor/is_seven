import { shallow } from 'enzyme';
import Header from '../layout/header';

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header></Header>);
    });
});
