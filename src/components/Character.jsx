import PropTypes from "prop-types";
import {styled} from "styled-components";

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
        <StyledDiv key={props.key}>
            <h3>{props.name}</h3>
            <p>{props.instruction}</p>
            <p>{props.glass}</p>
        </StyledDiv>
    );
}

Character.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    instruction: PropTypes.string,
    glass: PropTypes.string,
}