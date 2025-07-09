import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Options
    sameAsShipping: true,
    saveInfo: false
  })
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setShowAlert(true)
      clearCart()
      setTimeout(() => setShowAlert(false), 5000)
    }, 2000)
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 5
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cart.items.length === 0) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <Card className="p-5">
              <h3>Your cart is empty</h3>
              <p className="text-muted">Add some items to your cart before checkout.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      {showAlert && (
        <Alert variant="success" className="mb-4">
          <h4>Order Placed Successfully!</h4>
          <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
        </Alert>
      )}

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Shipping Information</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select State</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5>Payment Information</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-100"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>
              <h5>Order Summary</h5>
            </Card.Header>
            <Card.Body>
              {cart.items.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="me-2"
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                    <div>
                      <small className="d-block">{item.name}</small>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <hr />
              
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout