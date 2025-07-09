import React, { useState } from 'react'
import { Navbar, Nav, Container, Badge, Form, Button, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { getTotalItems } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/products?search=${searchTerm}`)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fas fa-shopping-bag me-2"></i>
          EliteStore
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
          
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <i className="fas fa-shopping-cart"></i>
              {getTotalItems() > 0 && (
                <Badge 
                  bg="danger" 
                  pill 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Nav.Link>
            
            {isLoggedIn ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="text-light text-decoration-none">
                  <i className="fas fa-user"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header