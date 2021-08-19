import {mount} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import H4 from '../components/reusable/h4';
import {defaultTheme} from '../theme/defaultTheme';

describe('H4', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <H4 textColor="black">test</H4>
            </ThemeProvider>,
        );
    });

    it('renders text correclty', () => {
        const testText = 'test_text';
        const h4 = mount(
            <ThemeProvider theme={defaultTheme}>
                <H4 textColor="black">{testText}</H4>
            </ThemeProvider>,
        );

        expect(h4.text()).toBe(testText);
    });
});
