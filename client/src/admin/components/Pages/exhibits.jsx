import React, { useEffect, useState } from 'react'
import { Col, Form, Row ,Tab, Container, Image, Overlay, OverlayTrigger, Button, Modal} from "react-bootstrap";
import SideNavBar from './SideNavBar';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import  '../../css/SystemAdmin.css';
import Axios from 'axios';


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

  

  


function Exhibits() {

  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const handleClose2 = () => setShow1(false);
  const handleShow2 = () => setShow1(true);

  const handleClose3 = () => setShow2(false);
  const handleShow3 = () => setShow2(true);

  const handleClose4 = () => setShow3(false);
  const handleShow4 = () => setShow3(true);

  const handleClose5 = () => setShow4(false);
  const handleShow5 = () => setShow4(true);

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

      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   
   
      const [modalShow, setModalShow] = React.useState(false);


      // Exhibit
   const [exhibitlist, setexhibitlist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getExhibit")
       .then((res) => {
         console.log(res);
         setexhibitlist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);

   
    return (
        <div style={{marginTop:100}}>

{/* Add Exhibit*/}
<Modal
      show={show}
      onHide={handleClose1} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Exhibits</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Exhibit Details</h4>
          <form>
            <div style={{ marginBottom: " 25%" }}>
              <label>
                Exhibit Title:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Exhibit Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-57%" }}>
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Term:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Year:
                <br />  <input type="text" name="name" />
              </label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>Cancel</Button>
          <Button variant="primary" >Add Exhibit</Button>
        </Modal.Footer>
      </Modal>

{/* View Archive*/}
<Modal
      show={show1}
      onHide={handleClose2} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Exhibits</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>View Archive</h4>
          <form>
            <div style={{ marginBottom: " 25%" }}>
              
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>Close</Button>
        </Modal.Footer>
      </Modal>

{/* Edit Exhibit*/}
<Modal
      show={show2}
      onHide={handleClose3} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Exhibits</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Exhibit Details</h4>
          <form>
            <div style={{ marginBottom: " 25%" }}>
              <label>
                Exhibit Title:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Exhibit Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
            </div>
            <br />
            <div style={{ marginLeft: "45%", marginTop: "-57%" }}>
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Product Description:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Term:
                <br />  <input type="text" name="name" />
              </label>
              <br />
              <label>
                Year:
                <br />  <input type="text" name="name" />
              </label>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>Cancel</Button>
          <Button variant="primary" onClick={handleClose3}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Archive */}
      <Modal
      show={show3}
      onHide={handleClose4} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title>Archive</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Are you sure you want to delete?</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose4}>Yes</Button>
          <Button variant="primary" onClick={handleClose4}>No</Button>
        </Modal.Footer>
      </Modal>

       {/* Confirmation */}
       {/* <Modal
      show={show3}
      onHide={handleClose5} 
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title>Attention</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Are you sure you want to Change?</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose5}>Yes</Button>
          <Button variant="primary" onClick={handleClose5}>No</Button>
        </Modal.Footer>
      </Modal> */}

      

            <Row>
    <Col sm={2}>
        <SideNavBar active={'exhibits'} />
    </Col>

    <Col sm={10}>
    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Exhibits</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Exhibit ID', field: 'exhibit_id' },
        { title: 'Exhibit Namex', field: 'exhibit_name' },
        { title: 'Year', field: 'exhibit_year' },
        { title: 'Term', field: 'exhibit_term'},
        { title: 'Date', field: 'exhibit_date'},
        {
            title: '',
            render: rowData => <div style={{cursor:'pointer'}}> 
               
                <MoreHorizIcon onClick={handleClick} />
                <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
        <div onClick={handleShow3}><EditIcon />
          <strong> Edit </strong>
        </div>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <div onClick={handleShow4}><FileCopyIcon style={{ color: 'red' }} />
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
          tooltip: 'Add Subscriber',
          isFreeAction: true,
          onClick: (event, rowData) => {
            handleShow1();
          }
        },
        {
            icon: ArchiveIcon,
            tooltip: 'View Archive',
            isFreeAction: true,
            onClick: (event) => {
              handleShow2();
            }
          }
      ]}
      data={[
        { exhibit_id: '101', exhibit_name: 'Nu Centie', exhibit_year: '2019', exhibit_term: '4', exhibit_date: '12345' },
      ]}        
      options={{
        sorting: true
      }}
    />
            </div>
        </Row>
    </Col>
    </Row>
        </div>
    )
}

export default Exhibits