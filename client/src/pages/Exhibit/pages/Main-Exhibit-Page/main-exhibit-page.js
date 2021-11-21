import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'


import {
    ExhibitContainer,
    Banner,
    DescriptionContainer,
    Result,
    Description,
    SortContainer,
    ItemsContainer, 
    Pagination
} from './main-exhibit-sytles'
import ExhibitCard from '../../components/ExhibitCard/exhibit-card'
const MainExhibitPage = () => {
    return (
        <ExhibitContainer>
            <Navbar/>
            <Banner>
                <h1>Exhibit</h1>
            </Banner>
            <DescriptionContainer>
                <Result>
                    <h1>Exhibit</h1>
                    <span>Showing 3 Results</span>
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
                <ExhibitCard/>
                <ExhibitCard/>
                <ExhibitCard/>
                <ExhibitCard/>
                <ExhibitCard/>
                <ExhibitCard/>

            </ItemsContainer>
            
            <Footer/>
            
        
        </ExhibitContainer>
    )
}

export default MainExhibitPage
