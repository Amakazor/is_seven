import {mount} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import H2 from '../components/reusable/h2';
import {defaultTheme} from '../theme/defaultTheme';

describe('H2', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <H2 textColor="black">test</H2>
            </ThemeProvider>,
        );
    });

    it('renders text correclty', () => {
        const testText = 'test_text';
        const h1 = mount(
            <ThemeProvider theme={defaultTheme}>
                <H2 textColor="black">{testText}</H2>
            </ThemeProvider>,
        );

        expect(h1.text()).toBe(testText);
    });
});
