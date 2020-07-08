import styled, {css} from 'styled-components'; 

const Button = styled.button`
    display: block;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em;
    border: 2px solid black;
    border-radius: 3px;
    color: black;
    background-color: transparent;
    cursor: pointer;
    
    ${props => props.danger && css`
        background-color: red;
        color: white;
        border 2px solid red;
        `
    }

    ${props => props.caution && css`
    background-color: #F5AE42;
    color: white;
    border 2px solid #F5AE42;
    `
}
 `
export default Button;