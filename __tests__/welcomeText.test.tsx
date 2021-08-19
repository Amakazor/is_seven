import {mount, shallow} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import WelcomeText from '../components/header/welcome/welcomeText';
import {defaultTheme} from '../theme/defaultTheme';

describe('Welcome Text', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <WelcomeText headerText="testText">
                    <p>testText</p>
                </WelcomeText>
            </ThemeProvider>,
        );
    });

    it('gets correct props', () => {
        const testText = 'header text';
        const children = [<p key={1}>testText</p>, <p key={2}>testText2</p>, <p key={3}>testText3</p>];
        const welcomeText = mount(
            <ThemeProvider theme={defaultTheme}>
                <WelcomeText headerText={testText}>{...children}</WelcomeText>
            </ThemeProvider>,
        );

        expect(welcomeText.find(WelcomeText).prop('headerText')).toBe(testText);
        expect(welcomeText.find(WelcomeText).prop('children')).toBe(children);
    });

    it('renders children correctly', () => {
        const welcomeText = mount(
            <ThemeProvider theme={defaultTheme}>
                <WelcomeText headerText="testText">
                    <p>testText</p>
                    <p>testText2</p>
                    <p>testText3</p>
                </WelcomeText>
            </ThemeProvider>,
        );

        expect(welcomeText.find('h1').hostNodes().length).toBe(1);
        expect(welcomeText.find('p').hostNodes().length).toBe(3);
        expect(welcomeText.find('h1').text()).toBe('testText');
        expect(welcomeText.find('p').at(1).text()).toBe('testText2');
    });
});
