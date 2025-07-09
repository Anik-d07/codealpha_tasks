import React from 'react'
import { Container, Row, Col, Card, Button, Table, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
  }

  const handleClearCart = () => {
    clearCart()
  }

  if (cart.items.length === 0) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <Card className="p-5">
              <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
              <h3>Your cart is empty</h3>
              <p className="text-muted mb-4">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button as={Link} to="/products" variant="primary" size="lg">
                Start Shopping
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart</h2>
            <Button variant="outline-danger" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="me-3"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <small className="text-muted">{item.description}</small>
                          </div>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-3">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>
              <h5>Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>
                  {getTotalPrice() > 50 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    '$5.00'
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax:</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong>
                  ${(getTotalPrice() + (getTotalPrice() > 50 ? 0 : 5) + (getTotalPrice() * 0.08)).toFixed(2)}
                </strong>
              </div>
              
              {getTotalPrice() < 50 && (
                <Alert variant="info" className="small">
                  Add ${(50 - getTotalPrice()).toFixed(2)} more for free shipping!
                </Alert>
              )}
              
              <Button as={Link} to="/checkout" variant="primary" size="lg" className="w-100">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <h6>Need Help?</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-decoration-none">Shipping Information</a></li>
                <li><a href="#" className="text-decoration-none">Return Policy</a></li>
                <li><a href="#" className="text-decoration-none">Contact Support</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button as={Link} to="/products" variant="secondary">
            <i className="fas fa-arrow-left me-2"></i>
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart