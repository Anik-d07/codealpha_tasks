import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4,
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 299.99,
      rating: 5,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced smartwatch with health monitoring features"
    },
    {
      id: 3,
      name: "Laptop Stand Adjustable",
      price: 49.99,
      rating: 4,
      image: "https://images.pexels.com/photos/26891720/pexels-photo-26891720.jpeg?_gl=1*smbq3h*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjg5NjAkajI1JGwwJGgw",
      description: "Ergonomic laptop stand for better posture"
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 24.99,
      rating: 5,
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Precision wireless mouse with long battery life"
    }
  ]

  return (
    <div>
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Electronics Sale"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Electronics Sale</h3>
            <p>Up to 50% off on latest electronics</p>
            <Button as={Link} to="/products" variant="primary" size="lg">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Fashion Collection"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Fashion Collection</h3>
            <p>Discover the latest trends in fashion</p>
            <Button as={Link} to="/products" variant="primary" size="lg">
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Home Decor"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Home & Living</h3>
            <p>Transform your space with our home collection</p>
            <Button as={Link} to="/products" variant="primary" size="lg">
              Browse
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* Categories Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Shop by Category</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col md={3} className="mb-3">
            <Card className="text-center category-card">
              <Card.Body>
                <i className="fas fa-laptop fa-3x text-primary mb-3"></i>
                <Card.Title>Electronics</Card.Title>
                <Button as={Link} to="/products?category=electronics" variant="outline-primary">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-3">
            <Card className="text-center category-card">
              <Card.Body>
                <i className="fas fa-tshirt fa-3x text-primary mb-3"></i>
                <Card.Title>Clothing</Card.Title>
                <Button as={Link} to="/products?category=clothing" variant="outline-primary">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-3">
            <Card className="text-center category-card">
              <Card.Body>
                <i className="fas fa-home fa-3x text-primary mb-3"></i>
                <Card.Title>Home & Living</Card.Title>
                <Button as={Link} to="/products?category=home" variant="outline-primary">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-3">
            <Card className="text-center category-card">
              <Card.Body>
                <i className="fas fa-book fa-3x text-primary mb-3"></i>
                <Card.Title>Books</Card.Title>
                <Button as={Link} to="/products?category=books" variant="outline-primary">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Featured Products */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Featured Products</h2>
          </Col>
        </Row>
        
        <Row>
          {featuredProducts.map(product => (
            <Col key={product.id} md={6} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="my-5">
          <Col>
            <Card className="bg-primary text-white text-center">
              <Card.Body className="py-5">
                <h3>Join Our Newsletter</h3>
                <p className="lead mb-4">Get the latest updates on new products and exclusive offers!</p>
                <Button variant="light" size="lg">
                  Subscribe Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home