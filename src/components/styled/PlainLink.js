import styled from 'styled-components';
import {Link} from 'react-router-dom';

// const linkStyles = {
//     fontSize: '1.2em',
//     textDecoration: 'none',
//     color: 'black',
//     margin: '0.5em'
// }

const PlainLink = styled(Link)`
    font-size: 1.2em;
    text-decoration: none;
    color: black;
    margin: 0.5em;
`;

export default PlainLink;