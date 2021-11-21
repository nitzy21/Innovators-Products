import styled from 'styled-components';
import banner from '../../assets/NU-fast-facts.jpg';

export const ProductDetailContainer = styled.div`
   
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
   align-items: center;
   justify-content: center;

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

export const ProductDetail = styled.div`
    max-width: 1200px;
    
  width: 100%;
  max-height: 1200px;
    
  height: 100%;
  margin: 30px auto;
  
  box-shadow: 0 0 5px #ccc;


    .details{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;
    }
    .details .big-img{
    max-width: 500px;
    min-width: 290px;
    overflow: hidden;
    margin: 25px;
    border-radius:20px;
    }
    .big-img img{
    width: 100%;
    height: 100%;
    max-height: 350px;
    
    display: block;
    object-fit: cover;
    border-radius:20px;
    }

    .details .box{
    max-width: 500px;
    min-width: 290px;
    height: 550px;
   
    margin: 25px;
    }
    .box .row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    }
    .box h1{
  
    letter-spacing: 2px;
    font-weight:900;
    }
    .box .row span{
        
    color: #30408D;
    font-weight:bold;
  
    }

    .box .row  span .name{
        
        color: #F0EBEB;
      
      
    }
    .box .colors button{
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
    }
    .box p{
    line-height: 1.5;
    margin: 15px 0;
    font-weight:700;
    }
    .thumb{
    width: 100%;
    height: 100px;
    display: flex;
    cursor: pointer;
    margin: 10px 0;
    }
    .thumb img{
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
    margin-top: 20px;
    margin-right: 20px;
    opacity: 0.7;
    border-radius: 10px;
    }
    .thumb img.active{
    opacity: 1;
    border: 1px solid #30408D;
    }
    .box .cart{
    background: #30408D;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 25px;
    margin-top: 15px;
    }

    .dot {
        margin-top:10px;
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    }
    
  @media (max-width: 500px){
  .thumb{
    height: 50px;
  }
  }

  @media (max-width: 500px){
    .thumb img{
    width: 50px;
  } 
  }
  
`;

