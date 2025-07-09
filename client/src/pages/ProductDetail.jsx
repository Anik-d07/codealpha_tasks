import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Badge, Alert } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [showAlert, setShowAlert] = useState(false)

  // Sample product data (in real app, this would come from API)
  const product = {
    id: parseInt(id),
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "Experience premium sound quality with these wireless Bluetooth headphones. Featuring advanced noise cancellation technology and up to 30 hours of battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge: 10 minutes = 3 hours playback",
      "Comfortable over-ear design",
      "Built-in microphone for calls",
      "Bluetooth 5.0 connectivity"
    ],
    specifications: {
      "Brand": "EliteAudio",
      "Model": "EA-BT300",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Battery": "30 hours",
      "Color": "Black, White, Blue"
    },
    inStock: true,
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Excellent sound quality and comfortable to wear for long periods.",
        date: "2025-01-10"
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        comment: "Good noise cancellation, but could be better for the price.",
        date: "2025-01-08"
      }
    ]
  }

  const [selectedImage, setSelectedImage] = useState(0)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <Container>
      {showAlert && (
        <Alert variant="success" className="mb-4">
          Product added to cart successfully!
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.images[selectedImage]}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Row>
                {product.images.map((image, index) => (
                  <Col key={index} xs={4}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className={`img-fluid cursor-pointer border ${selectedImage === index ? 'border-primary' : ''}`}
                      style={{ height: '80px', objectFit: 'cover' }}
                      onClick={() => setSelectedImage(index)}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <div className="mb-3">
            <h1>{product.name}</h1>
            <div className="d-flex align-items-center mb-2">
              <div className="me-3">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-muted'}`}
                  ></i>
                ))}
              </div>
              <span className="text-muted">({product.reviews.length} reviews)</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center">
              <span className="h2 text-primary me-3">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted text-decoration-line-through me-2">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <Badge bg="danger">-{product.discount}%</Badge>
              )}
            </div>
          </div>

          <p className="lead mb-4">{product.description}</p>

          <div className="mb-4">
            <h5>Key Features:</h5>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <Card className="mb-4">
            <Card.Body>
              <Row className="align-items-center">
                <Col>
                  <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      style={{ width: '80px' }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-100"
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="mb-4">
            <p className="text-success">
              <i className="fas fa-check me-2"></i>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className="text-muted">
              <i className="fas fa-truck me-2"></i>
              Free shipping on orders over $50
            </p>
            <p className="text-muted">
              <i className="fas fa-undo me-2"></i>
              30-day return policy
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header>
              <h5>Product Specifications</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <Col key={key} md={6} className="mb-2">
                    <strong>{key}:</strong> {value}
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Customer Reviews</h5>
            </Card.Header>
            <Card.Body>
              {product.reviews.map(review => (
                <div key={review.id} className="border-bottom pb-3 mb-3">
                  <div className="d-flex justify-content-between">
                    <strong>{review.user}</strong>
                    <small className="text-muted">{review.date}</small>
                  </div>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < review.rating ? 'text-warning' : 'text-muted'}`}
                      ></i>
                    ))}
                  </div>
                  <p className="mb-0">{review.comment}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button as={Link} to="/products" variant="secondary">
            <i className="fas fa-arrow-left me-2"></i>
            Back to Products
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail