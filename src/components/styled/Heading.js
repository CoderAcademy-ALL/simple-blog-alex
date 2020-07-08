import styled from 'styled-components'; 
const Heading = styled.h2`
    color: ${(props) => props.color || "black" }
    `;

export default Heading;