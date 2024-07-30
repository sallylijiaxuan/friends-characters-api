import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv=  styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: blanchedalmond;
    width: 40%;
    margin: 1% 0;
    padding: 2%;
`;

export default function Character(props) {
    return (
        <StyledDiv key={props.id}>
            <p>{props.first_name}</p>
            <p>{props.last_name}</p>
            <p>{props.gender}</p>
            <p>{props.occupation}</p>
            <p>{props.father}</p>
            <p>{props.mother}</p>
            <p>{props.portrayed_by}</p>
        </StyledDiv>
    );
}

Character.propTypes = {
    id: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    gender: PropTypes.string,
    occupation: PropTypes.string,
    father: PropTypes.string,
    mother: PropTypes.string,
    portrayed_by: PropTypes.string,
}