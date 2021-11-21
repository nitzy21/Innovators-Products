import styled from 'styled-components';
import banner from '../../assets/NU-fast-facts.jpg'

export const ExhibitContainer = styled.div`
   
    background: #fff;
    height: auto;

    @media screen and (max-width: 600px){
        padding-left: 0;
    }
`;

export const Banner = styled.div`
   height: 400px;
   width: 100%;
   background-repeat: no-repeat;
   background-size: cover;
   background-clip: content-box;
   background-image: Linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${banner});
   display: flex;
   background-position-y: center;
   align-items: center;
   justify-content: center;
   margin-top: 70px;

   h1{
       color: #fff;
       font-weight: 500;
       font-size: 70px;
       position: relative;

       &::after{
        content: '';
        background: #fff;
        width: 300px;
        height: 5px;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
   }
`;

export const DescriptionContainer = styled.div`
   display: flex;
   width: 100%;
   padding: 10px 20px;
   background: #fff;
   
`;

export const Result = styled.div`
   display: flex;
   flex-direction: column;
   align-items: left;
   justify-content: center;
   width: 100%;
   max-width: 200px;
   background: #fff;
   padding: 10px ;
   
   h1{
       color: #30408D;
       font-weight: 700;
   }
   span{
       font-weight: 100;
   }
`;

export const Description = styled.div`
   display: flex;
   width: 100%;
   background: #F0EBEB;
   align-items: center;
   justify-content: center
   ;

   span{
    font-weight: 100;
   }
   
`;

export const SortContainer = styled.div`
   display: flex;
   width: 100%;
   background: #F0EBEB;
   align-items: center;
   justify-content: space-between;
   padding: 10px 30px;
  

   .sort-wrapper{
       display: flex;
       justify-content: space-between;
       align-items: center;
       

       span{
           font-size: 20px;
           font-weight: 100;
           margin-right: 10px
           
       }

       .select_dd{
           padding: 10px;
           border: 0px;
           font-size: 20px;
           color: #30408D;
           outline: none;
       }
   }
   
`;


export const Pagination = styled.div`
   display: inline-block;

    a{
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;
        margin: 0 4px;
        background-color: #fff;
    }

    a.active{
        background-color: #30408D;
        color: white;
       
        
    }

    a:hover:not(.active) {
        background-color: #ddd;
    }
   
`;

export const ItemsContainer = styled.div`
   display: flex;
   width: 100%;
   background: #fff;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   padding: 30px;
   

   span{
    font-weight: 100;
   }
   
`;
