import styled from 'styled-components';

export const Card =  styled.nav`
display: flex;
flex-direction: column;
align-items: center;
background: #F0EBEB;
max-width: 300px;
min-width: 300px;
padding: 15px;
border-radius: 5px;
justify-content: space-between;
margin: 5px;

img{
    width: 250px;
    height: 250px;
    border-radius: 5px;
    
}
span{
    padding: 5px;
    font-weight: 500;
    font-size: 20px;
}
button{
    background: #30408D;
    border: 0;
    padding: 5px 30px;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    &:hover{
        background: #273472;
    }
}
`