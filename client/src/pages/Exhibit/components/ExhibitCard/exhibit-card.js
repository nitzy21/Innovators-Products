import React from 'react'
import { Card } from './exhibit-card-styles'
import { Link } from 'react-router-dom'

const ExhibitCard = () => {
    return (
        <Card>
            <img src="https://th.bing.com/th/id/R.a2e9a7255f52d1c4a806d39d22cdec6f?rik=Y3H%2bXa22XlcguQ&riu=http%3a%2f%2fsclick.net%2fcool+gadgets%2fcoolest-newest-high-tech-fun-gadget%2f18%2fcoolest-best-latest-top-new-fun-high-technology-electronic-gadgets-super-mini-spy-scope_1.jpg&ehk=O8rV%2fuzd4AsJfCwRUK1gxcgVuBNcAYmpgDDda1i2kxQ%3d&risl=&pid=ImgRaw&r=0"></img>
            <span>Mini Spy Scope</span>
            <Link to='/exhibit/productdetail'>
            <button>View Details</button>
            </Link>
           
            
        </Card>
    )
}

export default ExhibitCard
