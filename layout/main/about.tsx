import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import CenteredSection from "../../components/reusable/centeredSection";
import H2 from "../../components/reusable/h2";
import UnorderedList from "../../components/reusable/unorderedList";

export default function About() {
    const theme = useContext(ThemeContext);
    const aboutElements = [
        "Enable you to easily check if number is seven",
        "Allow you to determine if number is not seven",
        "Help you check if number is exactly seven, or merely close to seven",
        "Abstract complicated math of checking sevenity of a number",
        "Help you grow your app in a flexible and stressfree way",
        "Let you make the internet a better place"
    ]
    return (
        <CenteredSection id="about">
            <H2 textColor={theme.colors.colorAccent}>What can is7API do for you?</H2>
            <UnorderedList textColor={theme.colors.colorText} decorationColor={theme.colors.colorAccent}>
                {aboutElements.map((value, index) => <React.Fragment key={index}>{value}</React.Fragment>)}
            </UnorderedList>
        </CenteredSection>
    )
}