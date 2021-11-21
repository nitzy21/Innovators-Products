import styled,{createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    
`;


export const Container =  styled.div`
z-index: 1;
width: 100%;
max-width: 2100px;
margin-right: auto; 
margin-left: 0;


    @media screen and (max-width: 991px){
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export default GlobalStyle