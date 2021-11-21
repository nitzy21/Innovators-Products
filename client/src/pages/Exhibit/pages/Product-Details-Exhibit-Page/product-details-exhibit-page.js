import React , {useState} from 'react'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'


import {
    ProductDetailContainer,
    Banner,
    DescriptionContainer,
    Result,
    Description,
    SortContainer,
    ItemsContainer, 
    ProductDetail,
    SliderImageDot,
    Pagination
} from './product-details-exhibit-sytles'

import ProductDetailCard from '../../components/ProductDetailCard/product-detail-card'


class ProductDetailsExhibitPage extends React.Component{
// const ProductDetailsExhibitPage = () => {
   
   state = {
    products: [
      {
        "_id": "1",
        "ref": "Exhibit",
        "title": "Mini Spy Scope",
        "src": [
            "https://th.bing.com/th/id/R.a2e9a7255f52d1c4a806d39d22cdec6f?rik=Y3H%2bXa22XlcguQ&riu=http%3a%2f%2fsclick.net%2fcool+gadgets%2fcoolest-newest-high-tech-fun-gadget%2f18%2fcoolest-best-latest-top-new-fun-high-technology-electronic-gadgets-super-mini-spy-scope_1.jpg&ehk=O8rV%2fuzd4AsJfCwRUK1gxcgVuBNcAYmpgDDda1i2kxQ%3d&risl=&pid=ImgRaw&r=0",
            
            "https://th.bing.com/th/id/R.69b0e362dcd232668eee8abcca750c0c?rik=USQbcahSHuOXRw&riu=http%3a%2f%2ftfdmarket.com%2fsport%2fmzcwxwyj02.jpg&ehk=EoqW64H%2fo%2fl24K%2fQstZQgbkFxOdDWPXY%2bX8nn3M3Ay0%3d&risl=&pid=ImgRaw&r=0",
           
          ],
        "description": "Jonhalyn C. Go, RCH Mse, Edmark C. Kamintague",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices velit sit amet dignissim vehicula. Donec non porttitor nulla. Curabitur eu neque quam. Nunc porta sem ac pellentesque bibendum. Donec auctor lacus at orci auctor pharetra. Maecenas ut ligula ante. Maecenas tempus, nisl sit amet eleifend convallis, justo lacus volutpat elit, a scelerisque sem magna et sem. Proin non massa ante. Nunc fringilla nisl id orci aliquam ornare. Mauris blandit pharetra massa, eu varius metus varius in. Vivamus eleifend vulputate erat sed tristique. Sed ac nisl a sem sodales hendrerit laoreet in urna.        ",
        
        "count": 1
      }
    ],
    index: 0
  };

   myRef = React.createRef();

 

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };


   componentDidMount = () =>{
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  };

  render(){
   
    const {products, index} = this.state;
    return (
        
        <ProductDetailContainer>
            <Navbar/>
            <Banner>
                <h1>Exhibit</h1>
            </Banner>
            <DescriptionContainer>
                <Result>
                    <h1>Exhibit</h1>
                    <span>Showing 1 Result</span>
                </Result>
                <Description>
                    <span>Exhibit Description</span>
                </Description>
            </DescriptionContainer>
            <SortContainer>
               <div className="sort-wrapper">
                    <span>Sort by</span>
                    <select name="year" id="year" className="select_dd">
                    <option value="" disabled selected hidden>Year & Term</option>
                    <option value="2021">2021</option>
                    
                </select>
               </div>
               <Pagination>
               <a href="#">&laquo;</a>
                <a href="#" class="active">1</a>
                <a href="#" >2</a>
               
                <a href="#">&raquo;</a>
               </Pagination>
            </SortContainer>
            <ItemsContainer>
             
            <ProductDetail>
        {
          products.map(item =>(
            <div className="details" key={item.handleProductID}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
            
                
                <ProductDetailCard images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>

              <div className="box">
                <div className="row">
                <span>{item.ref} / <span className="name"> {item.title}</span></span>
                  
                  
                </div>
               
                <h1>{item.title}</h1>
                <p>Innovator/s:  {item.description}</p>
                <p>{item.content}</p>

               
                {/* <button className="cart">Add to cart</button> */}

              </div>
            </div>
          ))
        }
        </ProductDetail>
           
            </ItemsContainer>

            <Footer/>
            
        
        </ProductDetailContainer>
    )
}
}

export default ProductDetailsExhibitPage

