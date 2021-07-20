import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { ThemeContext } from 'styled-components';
import { HostContext } from '../../pages';

import COMPARISON_TYPE from '../../enums/comparisonType';

import DocumentationElement, { DocumentationText } from '../../components/main/documentation/documentationElement';
import CenteredSection from '../../components/reusable/centeredSection';
import CodeBlock from '../../components/reusable/codeBlock';
import H2 from '../../components/reusable/h2';
import H3 from '../../components/reusable/h3';
import Slider from '../../components/reusable/slider';
import NumberSlider from '../../components/reusable/numberSlider';
import Bold from '../../components/reusable/bold';

export default function Documentation(props: any) {
    const theme = useContext(ThemeContext);
    const host = useContext(HostContext);

    const codeBlockCommonProps = {
        textColor: theme.colors.colorDark,
        backgroundColor: theme.colors.colorPrimary,
        borderColor: theme.colors.colorText,
        borderRadius: theme.borderRadius,
        separatorColor: theme.colors.colorGray,
        labelColor: theme.colors.colorGray,
        fontSize: theme.fonts.slightlySmaller.size,
    }

    const slidingSelectCommonProps = {
        inactiveTextColor: theme.colors.colorText,
        activeTextColor: theme.colors.colorAccent,

        trackBackgroundColor: theme.colors.colorAccent,

        tackBackgroundColor: theme.colors.colorAccent,
        tackBorderColor: theme.colors.colorAccent,

        labelAll: true,
        labelActive: true,

        textTransitionTime: theme.transitionTime,
    }

    const documentationCommonProps = {
        backgroundColor: theme.colors.colorPrimary,
        borderColor: theme.colors.colorGray,
        borderRadius: theme.borderRadius,
    }

    const boldCommonProps = {
        weight: theme.fonts.bold.weight
    }

    const [activeMethod, setActiveMethod] = useState(0);
    const [methodResponse, setMethodResponse] = useState('');
    useEffect(() => {
        axios.get(`/api/7`).then(response => setMethodResponse(JSON.stringify(response.data)));
    }, [])

    const [activeNumberIndex, setActiveNumberIndex] = useState(8);
    const [activeNumber, setActiveNumber] = useState(7);
    const [responseFirst, setResponseFirst] = useState('');
    useEffect(() => {
        axios.get(`/api/${activeNumber}`).then(response => setResponseFirst(JSON.stringify(response.data)));
    }, [activeNumber])

    const comparisonTypes = Object.values(COMPARISON_TYPE);

    const comparisonNumers = [
        '7',
        '7.00005',
        '7.33',
        '7.66'
    ]

    const [comparisonNumberIndex, setComparisonNumberIndex] = useState(0);
    const [comparisonTypeIndex, setComparisonTypeIndex] = useState(0)
    const [responseSecond, setResponseSecond] = useState('');
    useEffect(() => {
        axios.get(`/api/${comparisonNumers[comparisonNumberIndex]}?comparison=${comparisonTypes[comparisonTypeIndex]}`).then(response => setResponseSecond(JSON.stringify(response.data)));
    }, [comparisonNumberIndex, comparisonTypeIndex])

    const [responseThird, setResponseThird] = useState([]);
    useEffect(() => {
        const axiosGetConfig = {
            validateStatus: ((status: number) => status == 400)
        }

        const urls = [
            `/api/`,
            `/api/seven`,
            `/api/7?comparison=yes`,
        ]

        Promise.allSettled(urls.map(url => axios.get(url, axiosGetConfig))).then(responses => {
            setResponseThird(responses.map((response, index) =>
                <React.Fragment key={index}>
                    {index != 0 && (<><br/><br/></>)}
                    {JSON.stringify((response as any).value.data).replaceAll(',', ',\u200b')}
                </React.Fragment>)
            )
        });
    }, [])

    const connectionMethods: {name: string; preview: (url: string) => JSX.Element}[] = [
        {
            name: 'curl',
            preview: (url: string): JSX.Element => (<>curl {url}</>),
        }, {
            name: 'wget',
            preview: (url: string): JSX.Element => (<>wget -qO- {url}</>),
        }, {
            name: 'fetch',
            preview: (url: string): JSX.Element => (<>fetch('{url}')<br/>.then(response =&gt; response.json())<br/>.then(data =&gt; console.log(data))</>),
        }, {
            name: 'axios',
            preview: (url: string): JSX.Element => (<>axios.get('{url}')<br/>.then(response =&gt; console.log(response.data))</>),
        }
    ]

    return (
        <CenteredSection id="documentation">
            <H2 textColor={theme.colors.colorAccent}>is7API public documentation</H2>
            <DocumentationElement {...documentationCommonProps}>
                <DocumentationText {...documentationCommonProps}>
                    <H3 textColor={theme.colors.colorText}>Getting started</H3>
                    <p>
                        Welcome to is7API public documentation. Is7API is a RESTful API dedicated to checking if number is equal to seven.
                        As a RESTful API it supports variety of tools that you can use to connect to it.
                    </p>
                    <p>
                        Below you will find a sliding input, that you can use to select your preffered tool that you will use to connect to is7API, you can also preview the request in the panel on the right (or below, if you are on mobile).
                    </p>
                    <Slider {...slidingSelectCommonProps} activeIndex={activeMethod} indexStateSetter={setActiveMethod} Values={connectionMethods.map(element => element.name)}></Slider>
                </DocumentationText>
                <CodeBlock {...codeBlockCommonProps} request={connectionMethods[activeMethod].preview(`${host}/api/7`)} response={methodResponse}/>
            </DocumentationElement>
            <DocumentationElement {...documentationCommonProps}>
                <DocumentationText {...documentationCommonProps}>
                    <H3 textColor={theme.colors.colorText}>Basic usage</H3>
                    <p>
                        The most common and the simplest usage of the is7API is to determine whether given number is exactly seven or not. 
                        This can be achieved by simply calling <i>{host}/api/</i> and adding the number that you want to test the sevenity of.
                    </p>
                    <p>
                        Our API enables you to use your favorite number formats, like integer or even float, so you don't need to convert the number you want to be tested (but you can still do it if you really want!).
                    </p>
                    <p>
                        Some example request URLs you can try using to access this basic funtionality include: 
                    </p>
                    <ul>
                        {['/api/7','/api/7.00','/api/7.01','/api/9','/api/15.5'].map((element, index) => (
                            <li key={index}><a href={element}><i>{host}{element}</i></a></li>
                        ))}
                    </ul>
                    <p>You can also test the API by selecting a number below, and watching the request and response panel on the right (or below, if you are on mobile) change:</p>
                    <NumberSlider {...slidingSelectCommonProps} numberMin={5} numberMax={9} numberStep={0.25} activeIndex={activeNumberIndex} indexStateSetter={setActiveNumberIndex} valueStateSetter={setActiveNumber} labelAll={false}></NumberSlider>
                </DocumentationText>
                <CodeBlock {...codeBlockCommonProps} request={connectionMethods[activeMethod].preview(`${host}/api/${activeNumber}`)} response={responseFirst}/>
            </DocumentationElement>
            <DocumentationElement {...documentationCommonProps}>
                <DocumentationText {...documentationCommonProps}>
                    <H3 textColor={theme.colors.colorText}>Comparison types</H3>
                    <p>
                        The basic functionality of is7API only allows you to test whether a number is exactly equal to seven or not.
                        But what if you wantend to check if a number is very close to 7, or will be equal to seven after rounding?
                        Thats where <i>comparison</i> property comes in!
                    </p>
                    <p>
                        Is7API provides you with three comparison behaviors that you can choose from:
                    </p>
                    <ul>
                        <li>
                            <i>exact</i> - default behavior - check whether given number is exactly equal to 7
                        </li>
                        <li>
                            <i>close</i> - check whether a number is between 6.9999 and 7.0001
                        </li>
                        <li>
                            <i>round</i> - check whether a number is between 6.5 and 7.4(9)
                        </li>
                    </ul>
                    <Slider {...slidingSelectCommonProps} activeIndex={comparisonNumberIndex} indexStateSetter={setComparisonNumberIndex} Values={comparisonNumers}></Slider>
                    <Slider {...slidingSelectCommonProps} activeIndex={comparisonTypeIndex} indexStateSetter={setComparisonTypeIndex} Values={comparisonTypes}></Slider>
                </DocumentationText>
                <CodeBlock {...codeBlockCommonProps} request={connectionMethods[activeMethod].preview(`${host}/api/${comparisonNumers[comparisonNumberIndex]}?comparison=${comparisonTypes[comparisonTypeIndex]}`)} response={responseSecond}></CodeBlock>
            </DocumentationElement>
            <DocumentationElement {...documentationCommonProps}>
            <DocumentationText {...documentationCommonProps}>
                    <H3 textColor={theme.colors.colorText}>Errors</H3>
                    <p>
                        There are three types of errors possible in is7API.
                        Each one of them has unique code, to allow users to identify which one it is, and to find possible ways to mitigate it.
                    </p>
                    <p><Bold {...boldCommonProps}>1001 - Missing argument</Bold></p>
                    <p>
                        This error is caused by directly calling is7API without providing any argument to the API. 
                        For example calling <i><a href={`/api/`}>{`${host}/api/`}</a></i> will cause this error.
                    </p>
                    <p>It can be avoided by providing a numerical argument in the request, like: <i><a href={`/api/7`}>{`${host}/api/7`}</a></i></p>
                    <br/>

                    <p><Bold {...boldCommonProps}>1002 - Bad argument</Bold></p>
                    <p>
                        This error is caused by calling is7API with non numeric or otherwise malformed argument, that cannot be parsed into integer or floating point number. 
                        For example requesting <i><a href={`/api/seven`}>{`${host}/api/seven`}</a></i> will result in this error.
                    </p>
                    <p>Error 1002 can be avoided by always making sure, that the argument of the request is numeric (integer or a float) like: <i><a href={`/api/7`}>{`${host}/api/7`}</a></i></p>
                    <br/>

                    <p><Bold {...boldCommonProps}>1003 - Bad argument</Bold></p>
                    <p>
                        The last error type is caused by trying to use a comparison type that is not regognizable by the is7API.
                        Example of request that will result in this error is: <i><a href={`/api/7?comparison=yes`}>{`${host}/api/7?comparison=yes`}</a></i>
                    </p>
                    <p>To resolve this error you need to check if you are using walid comparison parameter. Valid comparison types are: <i>{comparisonTypes.reduce((accumulator, current) => accumulator + (accumulator ? ', ' : '') + current, '')}</i>.</p>
                </DocumentationText>
                <CodeBlock 
                    {...codeBlockCommonProps} 
                    request={(<>
                        {connectionMethods[activeMethod].preview(`${host}/api/`)}
                        <br/>
                        <br/>
                        {connectionMethods[activeMethod].preview(`${host}/api/seven`)}
                        <br/>
                        <br/>
                        {connectionMethods[activeMethod].preview(`${host}/api/7?comparison=yes`)}
                    </>)} 
                    response={responseThird}></CodeBlock>
            </DocumentationElement>
        </CenteredSection>
    );
}