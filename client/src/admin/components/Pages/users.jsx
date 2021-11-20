import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row, Button, Modal, FloatingLabel } from "react-bootstrap";
import SideNavBar from "./SideNavBar";
import MaterialTable from "material-table";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Axios from "axios";
import ArchiveIcon from '@mui/icons-material/Archive';
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';


import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
function MyVerticallyCenteredModal(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Button type="submit">Submit form</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Users() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalShow, setModalShow] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
      // borderRadius: 15,
      margin: "10px 10px",
      maxWidth: 950,
    },
    tableHeaderCell: {
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    name: {
      fontWeight: "bold",
      color: theme.palette.secondary.dark,
    },
    status: {
      fontWeight: "bold",
      fontSize: "0.75rem",
      color: "white",
      backgroundColor: "grey",
      borderRadius: 8,
      padding: "3px 10px",
      display: "inline-block",
    },
  }));

  

  // refresh table
  function refreshTable(){
    Axios.get("http://localhost:3003/api/getUsers")
    .then((res) => {
      console.log(res);
      setuserslist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

//  get users
  const [userslist, setuserslist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getUsers")
      .then((res) => {
        console.log(res);
        setuserslist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  



  // Delete Controller 
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [user_id, setuser_id] = useState();

  function deleteUser(){
    Axios.put('http://localhost:3003/api/user/archived',{
      user_id : user_id
    }).then((response) => {
      console.log(response.status);
      refreshTable();
      handleCloseDelete();
    })
    .catch((err) => {
      console.error(err);
    })
  }


   // Update modal confirmation
   const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);
   const handleCloseUpdateConfirmation = () => setShowUpdateConfirmation(false);
   const handleShowUpdateConfirmation = () => setShowUpdateConfirmation(true);

   function updateConfirmationModal(e){
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      handleShowUpdateConfirmation();
      handleCloseUpdate();
    }
    setvalidate(true);
   }

    // Update Controller 
    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    const [validate, setvalidate] = useState(false);
    const [user_fname, setUserFName] = useState("");
    const [user_lname, setUserLName] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [user_contact, setUserContact] = useState("");
    const [user_address, setUserAddress] = useState("");


    function updateUser(){
      Axios.put('http://localhost:3003/api/user/update',{
      user_id : user_id,
      user_fname: user_fname,
      user_lname : user_lname,
      user_address : user_address
    }).then((response) => {
      console.log(response.status);
      refreshTable();
      handleCloseUpdateConfirmation();
    })
    .catch((err) => {
      console.error(err);
    })
    }
    


  return (
    <div style={{ marginTop: 100 }}>

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
         Are you sure you want to delete this user ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={
            (e) =>{
              e.preventDefault();
              deleteUser();
            }
            }
            >Understood</Button>
        </Modal.Footer>
      </Modal>


      {/* Modal Update Confirmation */}
      <Modal
        show={showUpdateConfirmation}
        onHide={handleCloseUpdateConfirmation}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure you want to update this user ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>{
            handleCloseUpdateConfirmation();
            handleShowUpdate();
          }}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={
            (e) =>{
              e.preventDefault();
              updateUser();
            }
            }
            >Understood</Button>
        </Modal.Footer>
      </Modal>


     {/* Modal Update */}
      <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Row>
        <Form noValidate validated={validate} onSubmit={updateConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form.Group controlId="firstName" className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
           label="First Name"
          >
             <Form.Control type="text" value={user_fname}
             minLength={3}
             maxLength={20}
             required
             onChange={(e) =>{
               setUserFName(e.target.value);
             }} />
             <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
           </FloatingLabel>
         </Form.Group>


           
        <Form.Group controlId="lastName" className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
           label="Last Name"
          >
             <Form.Control type="text" value={user_lname}
             minLength={3}
             maxLength={20}
             required
             onChange={(e) =>{
               setUserLName(e.target.value);
             }} />
             <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
           </FloatingLabel>
         </Form.Group>


         <Form.Group controlId="email" className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
           label="email"
          >
             <Form.Control type="text" value={user_email}
             disabled={true}
              />
           </FloatingLabel>
         </Form.Group>


         <Form.Group controlId="Contact Number" className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
           label="Contact Number"
          >
             <Form.Control type="text" value={user_contact}
             disabled={true}
              />
           </FloatingLabel>
         </Form.Group>


   
         <Form.Group controlId="address" className="mb-3">
        <FloatingLabel
          controlId="floatingInput"
           label="Address"
          >
             <Form.Control
         as="textarea"
         placeholder="address"
         style={{ height: '100px' }}
         value={user_address}
         minLength={5}
         maxLength={70}
         required
         onChange={(e) =>{
           setUserAddress(e.target.value);
         }} 

    />
             <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
           </FloatingLabel>
         </Form.Group>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" type='submit'
            >Save Changes</Button>
        </Modal.Footer>
        </Form>
        </Row>
      </Modal>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
        <Col sm={2}>
          <SideNavBar active={"users"} />
        </Col>
        <Col sm={10}>
        <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Users</h1>
            </div>
          </Row>
          <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Users" {...a11yProps(0)} />
                <Tab label="Archive Users" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

            <MaterialTable
                title=""
                columns={[
                  { title: 'User ID', field: 'user_id', defaultSort: "asc", },
                  { title: 'First Name', field: 'user_fname' },
                  { title: 'Last Name', field: 'user_lname' },
                  { title: 'Email', field: 'user_email' },
                  { title: 'Contact Number', field: 'user_contact' },
                  { title: 'Address', field: 'user_address' },
                  { title: 'Created Date', field: 'dateCreated' },
                  {
                    title: 'Actions',
                    sorting: true,
                    render: (row) => <div style={{ cursor: 'pointer' }}>

                      <MoreHorizIcon onClick={(e) => {
                         e.preventDefault();
                        setuser_id(row.user_id);
                        setUserFName(row.user_fname);
                        setUserLName(row.user_lname);
                        setUserEmail(row.user_email);
                        setUserContact(row.user_contact);
                        setUserAddress(row.user_address);
                        handleClick(e);
                        }
                        } />
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => {
                          handleClose();
                          handleShowUpdate();
                        }} disableRipple>
                          <EditIcon />
                          <strong> Edit </strong>
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();                        
                          handleShowDelete();
                        }} disableRipple>
                          <FileCopyIcon style={{ color: 'red' }} />
                          <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
                        </MenuItem>
                      </StyledMenu>

                    </div>
                  }

                ]}
                actions={[
                  // {
                  //   icon: 'add',
                  //   tooltip: 'Add Subscriber',
                  //   isFreeAction: true,
                  //   onClick: (event, rowData) => {
                  //     setModalShow(true);
                  //   }
                  // },
                  {
                    icon: ArchiveIcon,
                    tooltip: 'View Archive',
                    isFreeAction: true,
                    onClick: (event) => alert("You want to add a new row")
                  }
                ]}
                
                data={userslist}
                options={{
                  sorting: true,
                  search: true,
                }}
              />
              </TabPanel>

              <TabPanel value={value} index={1}>

            <MaterialTable
                title=""
                columns={[
                  { title: 'User ID', field: 'user_id', defaultSort: "asc", },
                  { title: 'First Name', field: 'user_fname' },
                  { title: 'Last Name', field: 'user_lname' },
                  { title: 'Email', field: 'user_email' },
                  { title: 'Contact Number', field: 'user_contact' },
                  { title: 'Address', field: 'user_address' },
                  { title: 'Created Date', field: 'dateCreated' },
                  {
                    title: 'Actions',
                    sorting: true,
                    render: (row) => <div style={{ cursor: 'pointer' }}>

                      <MoreHorizIcon onClick={(e) => {
                         e.preventDefault();
                        setuser_id(row.user_id);
                        setUserFName(row.user_fname);
                        setUserLName(row.user_lname);
                        setUserEmail(row.user_email);
                        setUserContact(row.user_contact);
                        setUserAddress(row.user_address);
                        handleClick(e);
                        }
                        } />
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => {
                          handleClose();
                          handleShowUpdate();
                        }} disableRipple>
                          <EditIcon />
                          <strong> Edit </strong>
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();                        
                          handleShowDelete();
                        }} disableRipple>
                          <FileCopyIcon style={{ color: 'red' }} />
                          <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
                        </MenuItem>
                      </StyledMenu>

                    </div>
                  }

                ]}
                actions={[
                  // {
                  //   icon: 'add',
                  //   tooltip: 'Add Subscriber',
                  //   isFreeAction: true,
                  //   onClick: (event, rowData) => {
                  //     setModalShow(true);
                  //   }
                  // },
                  {
                    icon: ArchiveIcon,
                    tooltip: 'View Archive',
                    isFreeAction: true,
                    onClick: (event) => alert("You want to add a new row")
                  }
                ]}
                // data={userslist}
                options={{
                  sorting: true,
                  search: true,
                }}
              />
              </TabPanel>
              </Box>
        </Col>
      </Row>
    </div>
  );
}

export default Users;
