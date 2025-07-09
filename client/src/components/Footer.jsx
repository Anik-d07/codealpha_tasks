import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>EliteStore</h5>
            <p>Your premier destination for quality products at unbeatable prices.</p>
            <div className="social-links">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </Col>
          
          <Col md={2}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={2}>
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Electronics</a></li>
              <li><a href="#" className="text-light text-decoration-none">Clothing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Books</a></li>
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
            </ul>
          </Col>
          
          <Col md={2}>
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </Col>
          
          <Col md={2}>
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Login</a></li>
              <li><a href="#" className="text-light text-decoration-none">Register</a></li>
              <li><a href="#" className="text-light text-decoration-none">Orders</a></li>
              <li><a href="#" className="text-light text-decoration-none">Wishlist</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2025 EliteStore. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer