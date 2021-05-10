import { mount } from 'enzyme';
import BorderedLink, { BorderedLinkProps } from '../components/reusable/borderedLink';

const borderedLinkProps: BorderedLinkProps = {
    colors: {
        normal: {
            textColor: 'white',
            borderColor: 'white',
            backgroundColor: 'black',
        },
        hover: {
            textColor: 'black',
            borderColor: 'black',
            backgroundColor: 'white',
        },
    },
    href: '#about',
    transitionTime: '200ms',
    borderRadius: '0.05rem',
    onClick: () => {},
    removeBorderMobile: false,
};

const testText = "abcd";

describe('Bordered Link', () => {
    it('renders without crashing', () => {
        mount(<BorderedLink {...borderedLinkProps}>{testText}</BorderedLink>);
    });

    it('renders correctly', () => {
        const borderedLink = mount(<BorderedLink {...borderedLinkProps}>{testText}</BorderedLink>);

        expect(borderedLink.text()).toBe(testText);
        expect(borderedLink.find("a").hostNodes().length).toBe(1);
    });

    it('has correct link', () => {
        const borderedLink = mount(<BorderedLink {...borderedLinkProps}>{testText}</BorderedLink>);
        expect(borderedLink.find("a").prop("href")).toEqual(borderedLinkProps.href);
    });
});
