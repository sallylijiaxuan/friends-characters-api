import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #AA7DCE;
    width: 40%;
    margin: 1% 0;
    padding: 2%;
`;

const StyledTitle = styled.div`
    background-color: mediumpurple;
    width: 100%;
`

const StyledP = styled.p`
    font-size: calc(2px + 2vh);
    font-weight: bold;
    color: #FFE787;
`

export default function Character(props) {
    return (
        <StyledDiv key={props.key}>
            <StyledTitle>
                <StyledP>{props.firstName}</StyledP>
                <StyledP>{props.lastName}</StyledP>
            </StyledTitle>
            <StyledP>Gender: {props.gender}</StyledP>
            <StyledP>Occupation: {props.occupation}</StyledP>
            <StyledP>Father: {props.father}</StyledP>
            <StyledP>Mother: {props.mother}</StyledP>
            <StyledP>Portrayed by: {props.portrayedBy}</StyledP>
        </StyledDiv>
    );
}

Character.propTypes = {
    key: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    occupation: PropTypes.string,
    father: PropTypes.string,
    mother: PropTypes.string,
    portrayedBy: PropTypes.string,
}