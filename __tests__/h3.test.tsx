import {mount} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import H3 from '../components/reusable/h3';
import {defaultTheme} from '../theme/defaultTheme';

describe('H3', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <H3 textColor="black">test</H3>
            </ThemeProvider>,
        );
    });

    it('renders text correclty', () => {
        const testText = 'test_text';
        const h3 = mount(
            <ThemeProvider theme={defaultTheme}>
                <H3 textColor="black">{testText}</H3>
            </ThemeProvider>,
        );

        expect(h3.text()).toBe(testText);
    });
});
