import { shallow } from 'enzyme';
import Main from '../layout/main';

describe('Main', () => {
    it('renders without crashing', () => {
        shallow(<Main></Main>);
    });
});
