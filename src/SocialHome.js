import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DeckIcon from '@mui/icons-material/Deck';
import { styled } from '@mui/system';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'
import NavComponent from './NavComponent';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const LargeIcon = styled(DeckIcon)(({ theme }) => ({
    fontSize: '2.5rem', // Adjust the size as per your requirement
    color:"green"
  }));

const SocialHome = () => {
  return (
    <div className=''>
        
        {/* NAVBAR FROM REACT BOOTSTRAP STARTS */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navContainer'>
        <Navbar.Brand href="#home">
        <LargeIcon/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navList" >
             
              <Form className="d-flex searchForm">
              <SearchIcon className='searchIcon'/>
              <Form.Control
                type="search"
                placeholder="Search"
                className="searchInput"
                aria-label="Search"
              />
              </Form>
          
              <Nav.Link href="#home"><NavComponent Icon={HomeIcon} title="Home"/></Nav.Link>
              <Nav.Link href="#link"><NavComponent Icon={PeopleIcon} title="My Network"/></Nav.Link>
              <Nav.Link href="#link"><NavComponent Icon={BusinessCenterIcon} title="Jobs"/></Nav.Link>
              <Nav.Link href="#home"><NavComponent Icon={MessageIcon} title="Messaging"/></Nav.Link>
              <Nav.Link href="#link"><NavComponent Icon={NotificationsActiveIcon} title="Notifications"/></Nav.Link>
              

              <NavDropdown title="Me" id="basic-nav-dropdown" className='headerOptionTitle'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link"><NavComponent Icon={AppsIcon} title="For Business"/></Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    {/* NAVBAR FROM REACT BOOTSTRAP ENDS */}

    {/* HOME PAGE BODY BEGINS */}
    <div className='homePageContainer'>
      <div className='homePage'>
      <Row >

        <Col xs={12} md={3}>
          <Card className="gap">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="feed_inputContainer gap">
          {/* <div className='feed_inputContainer'> */}
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input placeholder="Write a post"  type='text'/>
                    <button type='submit'>Send</button>
                </form>
            </div>            

            <div className='feed_inputOptions'>
                <InputOption Icon = {ImageIcon} title="Photo" color ='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title={'Video'} color='#7FC15E'/> 
                <InputOption Icon={EventNoteIcon} title={'Event'} color='#E7A33E'/>
                <InputOption Icon={CalendarViewDayIcon} title={'Write article'} color='#fc9294'/>
            </div>
            {/* </div> */}
          </Card>
          <Card className="gap">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="gap">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="gap">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="gap">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
      </div>
   
    </div>
    </div>
  )
}

export default SocialHome