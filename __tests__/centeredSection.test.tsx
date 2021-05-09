import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import CenteredSection from '../components/reusable/centeredSection';
import { defaultTheme } from '../theme/defaultTheme';

describe('Centered Section', () => {
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <CenteredSection>abcd</CenteredSection>
            </ThemeProvider>,
        );
    });

    it('has correct id', () => {
        const testId = "testId";

        let centeredSection = mount(
            <ThemeProvider theme={defaultTheme}>
                <CenteredSection id={testId}>abcd</CenteredSection>
            </ThemeProvider>,
        );
        expect(centeredSection.find(CenteredSection).prop('id')).toBe(testId);

        centeredSection = mount(
            <ThemeProvider theme={defaultTheme}>
                <CenteredSection>abcd</CenteredSection>
            </ThemeProvider>,
        );
        expect(centeredSection.find(CenteredSection).prop('id')).toBe(undefined);
    });

    it('renders children correctly', () => {
        const centeredSection = mount(
            <CenteredSection>
                <div>testDIV1</div>
                <div>testDIV2</div>
                <span>
                    testSpan<span>insideSpan</span>
                </span>
            </CenteredSection>,
        );

        expect(centeredSection.find('div').hostNodes().length).toBe(2);
        expect(centeredSection.find('span').hostNodes().length).toBe(2);
        expect(centeredSection.find('span').last().text()).toBe('insideSpan');
    });
});
