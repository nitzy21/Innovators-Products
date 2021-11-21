import styled from 'styled-components';
import {NavLink , Link} from 'react-router-dom';
import {Container} from '../../globalStyles'

export const Nav =  styled.nav`
background: #30408D;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
z-index: 999;
width: 100%;
margin: auto;

@media screen and (max-width: 910px){
    width: 100%;

}

`;

export const NavbarContainer =  styled(Container)`
height: 60px;
display: flex;
padding: 0 30px 0 30px;
margin: auto;
max-width: 1500px;
justify-content: space-between;
${Container}


@media (min-width: 250px) and (max-width: 910px){
    padding: 0;
}
`;


export const LogoContainer =  styled(Container)`
    display: flex;

    .logo-name{
        display: flex;
        flex-direction: column;

        img{
            margin-top: auto;
            margin-bottom: auto;
           
        }
        
        span{
            font-weight: 400;
            line-height: 18px;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 5px;
            width: 100%;
            font-size: 15px;
            color: #fff;
        }
    }

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center; 

`;

export const NavLinks = styled(NavLink)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
white-space: nowrap;
font-size: 15px;
height: 100%;
width: 100%;


@media screen and (max-width: 910px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;

    &:hover{
        color: #fff;
        transition: all 0.3s ease;
        background: #FE9C8F;
        text-decoration: none;
    }
}
`;

export const NavItem = styled.li`
height: 60px;
display: inline-flex;
text-align: center;
color: #fff;

.cart{
    font-size: 25px;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
}

@media screen and (max-width: 910px){
    width: 100%;
    /* &:hover{
        border: none;
    } */
}
`;