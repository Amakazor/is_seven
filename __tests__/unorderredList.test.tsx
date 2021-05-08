import { mount, shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import UnorderedList from '../components/reusable/unorderedList';
import { defaultTheme } from '../theme/defaultTheme';

describe('Unordered List', () => {
    it('renders without crashing', () => {
        shallow(
            <ThemeProvider theme={defaultTheme}>
                <UnorderedList textColor="black" decorationColor="black" children={'fasfsa'}></UnorderedList>
            </ThemeProvider>,
        );
    });

    it('should render appropriate number of list elements', () => {
        let unorderedList = mount(
            <ThemeProvider theme={defaultTheme}>
                <UnorderedList
                    textColor="black"
                    decorationColor="black"
                    children={['abcd', 'efgh'].map((value, index) => (
                        <React.Fragment key={index}>{value}</React.Fragment>
                    ))}
                ></UnorderedList>
            </ThemeProvider>,
        );
        expect(unorderedList.find('li').hostNodes().length).toBe(2);

        unorderedList = mount(
            <ThemeProvider theme={defaultTheme}>
                <UnorderedList
                    textColor="black"
                    decorationColor="black"
                    children={['abcd', 'efgh', 'xyz', 'test'].map((value, index) => (
                        <React.Fragment key={index}>{value}</React.Fragment>
                    ))}
                ></UnorderedList>
            </ThemeProvider>,
        );
        expect(unorderedList.find('li').hostNodes().length).toBe(4);

        unorderedList = mount(
            <ThemeProvider theme={defaultTheme}>
                <UnorderedList
                    textColor="black"
                    decorationColor="black"
                    children={[
                        <p key={1}>abcd</p>,
                        <div key={2}>
                            <div>abcd</div>
                        </div>,
                    ]}
                ></UnorderedList>
            </ThemeProvider>,
        );
        expect(unorderedList.find('li').hostNodes().length).toBe(2);
    });
});
