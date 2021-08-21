import About from './main/about';
import Documentation from './main/documentation';
import dynamic from 'next/dynamic';
import {useState, useEffect} from 'react';
import useWindowDimensions from '../utility/hooks/useWindowDimensions';
import CenteredContainer from '../components/reusable/centeredContainer';
import Image from 'next/image';
import styled from 'styled-components';
const Carousel = dynamic(() => import('nuka-carousel'), {ssr: false});

const StyledCarousel = styled(Carousel)`
    margin-bottom: 2rem;
`;

export default function Main() {
    const [slidesToShow, setSlidesToShow] = useState(5);
    const {width} = useWindowDimensions();

    useEffect(() => {
        const numberOfSlides = Math.ceil(width / 400);
        if (slidesToShow != numberOfSlides) setSlidesToShow(numberOfSlides);
    }, [width]);

    const images = ['sevenGuys.png', 'sevenSeven.png', 'sevenM.png', 'sevenDown.png', 'sevenFlags.png', 'N7.png', 'sevenPlane.png'];

    return (
        <main>
            <StyledCarousel
                slidesToShow={slidesToShow}
                autoplayInterval={2000}
                speed={1500}
                easing={'easeQuadInOut'}
                wrapAround
                swiping
                withoutControls
                autoplay>
                {[...images, ...images].map((name, index) => {
                    return (
                        <CenteredContainer key={index}>
                            <Image src={`/images/${name}`} width={200} height={100} />
                        </CenteredContainer>
                    );
                })}
            </StyledCarousel>
            <About />
            <Documentation />
        </main>
    );
}
