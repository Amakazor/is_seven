import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import H1 from '../components/reusable/h1';
import { defaultTheme } from '../theme/defaultTheme';

describe('H1', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <H1 textColor="black">test</H1>
            </ThemeProvider>,
        );
    });

    it('renders text correclty', () => {
        const testText = 'test_text';
        const h1 = mount(
            <ThemeProvider theme={defaultTheme}>
                <H1 textColor="black">{testText}</H1>
            </ThemeProvider>,
        );

        expect(h1.text()).toBe(testText);
    });
});
