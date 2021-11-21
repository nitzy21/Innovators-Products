import styled from 'styled-components';

export const Footer =  styled.div`
background: #30408D;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 999;
width: 100%;
margin: auto;

img{
    height: 50px;
    width: 50px;
}

.logo-name{
    text-align: center;
    color: #fff;
}

@media screen and (max-width: 910px){
    width: 100%;

}

`;