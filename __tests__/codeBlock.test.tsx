import {mount} from 'enzyme';
import CodeBlock from '../components/reusable/codeBlock';

describe('codeBlock', () => {
    const codeBlockProps = {
        textColor: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        labelColor: 'black',
        separatorColor: 'black',
        borderRadius: '0.5rem',
        fontSize: '1.2rem',
        request: 'test_text',
    };
    it('renders without crashing', () => {
        mount(<CodeBlock {...codeBlockProps}></CodeBlock>);
    });

    it('renders correctly', () => {
        const codeBlock = mount(<CodeBlock {...codeBlockProps}></CodeBlock>);

        expect(codeBlock.find('div').hostNodes().length).toBe(4);

        const response = 'text_test';
        const codeBlockWithResponse = mount(<CodeBlock {...codeBlockProps} response={response}></CodeBlock>);
        expect(codeBlockWithResponse.find('div').hostNodes().length).toBe(4);
    });
});
