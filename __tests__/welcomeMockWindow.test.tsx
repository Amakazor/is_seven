import {mount, shallow} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import WelcomeMockWindow from '../components/header/welcome/welcomeMockWindow';
import {defaultTheme} from '../theme/defaultTheme';

describe('Welcome Text', () => {
    const lines = [
        {
            isMockLine: true,
            indent: {
                left: 0,
                right: 0,
            },
        },
        {
            isMockLine: true,
            indent: {
                left: 0,
                right: 0,
            },
        },
        {
            isMockLine: true,
            indent: {
                left: 0,
                right: 0,
            },
        },
        {
            isMockLine: false,
            indent: {
                left: 0,
                right: 0,
            },
            content: <p>testText</p>,
        },
    ];

    const filenames = [
        {
            name: 'test_file0',
            isActive: true,
        },
        {
            name: 'test_file1',
            isActive: false,
        },
        {
            name: 'test_file2',
            isActive: false,
        },
    ];
    it('renders without crashing', () => {
        mount(
            <ThemeProvider theme={defaultTheme}>
                <WelcomeMockWindow lines={lines} filenames={filenames} />
            </ThemeProvider>,
        );
    });

    it('renders children correctly', () => {
        const welcomeMockWindow = mount(
            <ThemeProvider theme={defaultTheme}>
                <WelcomeMockWindow lines={lines} filenames={filenames} />
            </ThemeProvider>,
        );

        expect(welcomeMockWindow.find('.mockWindowFile').hostNodes().length).toBe(3);
        expect(
            welcomeMockWindow
                .find('.mockWindowFile')
                .hostNodes()
                .map(element => element.text()),
        ).toStrictEqual(filenames.map(filename => filename.name));

        expect(welcomeMockWindow.find('.mockWindowLine').hostNodes().length).toBe(4);
    });
});
