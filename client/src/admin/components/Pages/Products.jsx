import React, { useEffect, useState } from 'react'
import { Col, Row, Modal, Form, Button, Container, Image } from "react-bootstrap";
import SideNavBar from './SideNavBar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TextField from "@material-ui/core/TextField";
import Axios from 'axios';


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

function Products() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    function formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    
        // Products
        const [productlist, setproductlist] = useState([]);
        useEffect(() => {
          Axios.get("http://localhost:3003/api/getProducts")
            .then((res) => {
              console.log(res);
              setproductlist(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);

        function refreshTable(){
        
          Axios.get("http://localhost:3003/api/getProducts")
            .then((res) => {
              console.log(res);
              setproductlist(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }


        function archivedTable(){
        
          Axios.get("http://localhost:3003/api/getProducts/archived")
            .then((res) => {
              console.log(res);
              setproductlist(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }

        

          // Add Product 
          const [showAdd, setShowAdd] = useState(false);
          const handleCloseAdd = () => setShowAdd(false);
          const handleShowAdd = () => setShowAdd(true);


          const [fileImage, setfileImage] = useState();
          const [category, setcategory] = useState();
          const [price, setprice] = useState(0);
          
          const insertProduct = (e) => {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
            } else {
              e.preventDefault();
            Axios.post('http://localhost:3003/api/insertProducts/systemadmin',
            {
              fileImage : fileImage,
              category : category,
              price : price
            })            
            handleCloseAdd();
            setfileImage();
            setcategory();
            setprice();
            
            }
            refreshTable();
          }



          // Update Product 
          const [showUpdate, setShowUpdate] = useState(false);
          const handleCloseUpdate = () => setShowUpdate(false);
          const handleShowUpdate = () => setShowUpdate(true);

          const [product_id, setproduct_id] = useState();
          
          
          const updateProduct = (e) => {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
            } else {
             
            Axios.put('http://localhost:3003/api/updateProducts',
            {
              product_id: product_id,
              fileImage : fileImage,
              category : category,
              price : price
            })            
            handleCloseUpdate();
            setfileImage();
            setcategory();
            setprice();
            
            }
            refreshTable();
          }




          // Delete Controller 
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  

  function deleteProduct(){
    Axios.put('http://localhost:3003/api/products/archived',{
      product_id : product_id
    }).then((response) => {
      console.log(response.status);
      refreshTable();
      handleCloseDelete();
    })
    .catch((err) => {
      console.error(err);
    })
  }


  // archived buttons
  const [isArchived, setisArchived] = useState(false);

  function isArchivedController(){
    setisArchived(!isArchived);
  }

    return (
        <div>


    {/*Add Products*/}
    <Modal
      show={showAdd}
      onHide={handleCloseAdd} 
      backdrop="static"
      keyboard={false}
      centered

    >
      <Row>
     <Form noValidate validated={true} onSubmit={insertProduct}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Products & Orders</Modal.Title>
        </Modal.Header>

        
        <Modal.Body
         style={{
          display:'inline-flex',
          justifyContent:'center'
        }}
        >
          <div>
          <h4>Add New Product</h4>
         
            <Container>
              <p>
                Product Price:
                 
              </p>
              <Form.Control type="text" placeholder="₱ 00.00" 
              required
              onChange={(e) => {
                
                  setprice(e.target.value);
                }}
              />
              </Container>
              <Container>
              <p>
                Product Category:
                 
              </p>
              <Form.Select aria-label="Floating label select example" 
               required
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              >
              <option value={null}></option>
              <option value="Book">Book</option>
              <option value="Innovation">Innovation</option>
              <option value="Souvenir">Souvenir</option>
              </Form.Select>
              </Container>
              <Container>
              <p>
                Product Picture:
                 
              </p>
              <Form.Control type="file"
               required
              onChange={(e) => {
                  setfileImage(e.target.value);
                }}/>
              </Container>
              </div>
         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>Cancel</Button>
          <Button variant="primary" type="submit"
        
          >Add Product</Button>
        </Modal.Footer>
        </Form>
        </Row>
      </Modal>



      {/*Update Products*/}
    <Modal
      show={showUpdate}
      onHide={handleCloseUpdate} 
      backdrop="static"
      keyboard={false}
      centered

    >
      <Row>
     <Form noValidate validated={true} onSubmit={updateProduct}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Products & Orders</Modal.Title>
        </Modal.Header>

        
        <Modal.Body
         style={{
          display:'inline-flex',
          justifyContent:'center'
        }}
        >
          <div>
          <h4>Update New Product</h4>
         
            <Container>
              <p>
                Product Price:
                 
              </p>
              <Form.Control type="text" placeholder="₱ 00.00" 
              required
              value={price}
              onChange={(e) => {
                
                  setprice(e.target.value);
                }}
              />
              </Container>
              <Container>
              <p>
                Product Category:
                 
              </p>
              <Form.Select aria-label="Floating label select example" 
               required
               value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              >
              <option value={null}></option>
              <option value="Book">Book</option>
              <option value="Innovation">Innovation</option>
              <option value="Souvenir">Souvenir</option>
              </Form.Select>
              </Container>
              {/* <Container>
              <p>
                Product Picture:
                 
              </p>
              <Form.Control type="file"
               required
              onChange={(e) => {
                  setfileImage(e.target.value);
                }}/>
              </Container> */}
              </div>
         
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>Cancel</Button>
          <Button variant="primary" type="submit"
        
          >Save Changes</Button>
        </Modal.Footer>
        </Form>
        </Row>
      </Modal>



        {/* Modal Delete */}
        <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure you want to delete this product ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={
            (e) =>{
              e.preventDefault();
              deleteProduct();
            }
            }
            >Understood</Button>
        </Modal.Footer>
      </Modal>


            <MaterialTable
                title=""
                columns={[
                  { title: 'Product ID', field: 'product_id' ,defaultSort:'desc' },
                  { title: 'Price', field: 'product_price' },
                  { title: 'Category', field: 'product_category' },
                  { title: 'Date Registered', field: 'product_dateCreated', 
                render:(row) => {
                  return <div>
                    <p>{formatDate(row.product_dateCreated)}</p>
                    </div>
                }
                },
                  {
                    title: '',
                    render: rowData => <div style={{ cursor: 'pointer' }}>

                      <MoreHorizIcon onClick={(e) => {
                        setproduct_id(rowData.product_id);
                        setprice(rowData.product_price);
                        setcategory(rowData.product_category);
                        setfileImage(rowData.product_pictures);
                        handleClick(e);
                      }} />
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => {handleClose(); handleShowUpdate();}}>
                          <div ><EditIcon />
                            <strong> Edit </strong>
                          </div>
                        </MenuItem>
                        {/* Archive Data */}
                        <MenuItem onClick={() => {handleClose(); handleShowDelete();}}>
                        <div ><FileCopyIcon style={{ color: 'red' }} />
                          <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
                          </div>
                        </MenuItem>
                      </StyledMenu>

                    </div>
                  }

                ]}
                actions={[
                  {
                    icon: 'add',
                    tooltip: 'Add Product',
                    isFreeAction: true,
                    onClick: (event, rowData) => {
                      handleShowAdd();
                    }
                  },
                  {
                    icon: ArchiveIcon,
                    tooltip: 'View Archive',
                    isFreeAction: true,
                    hidden:isArchived,
                    onClick: (event) => {
                      setisArchived(true);
                      archivedTable();
                    }
                  }
                  ,
                  {
                    icon: ArchiveIcon,
                    tooltip: 'Back to List',
                    isFreeAction: true,
                    hidden:!isArchived,
                    onClick: (event) => {
                      setisArchived(false);
                      refreshTable();
                    }
                  }
                ]}
                data={productlist}
                options={{
                  sorting: true
                }}
              />
        </div>
    )
}

export default Products
