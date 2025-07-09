import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card className="h-100 product-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {product.discount && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 start-0 m-2"
          >
            -{product.discount}%
          </Badge>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6">{product.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">
          {product.description}
        </Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <span className="h5 text-primary mb-0">${product.price}</span>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="text-warning">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < product.rating ? 'text-warning' : 'text-muted'}`}
              ></i>
            ))}
          </div>
        </div>
        
        <div className="d-flex gap-2">
          <Button 
            as={Link} 
            to={`/product/${product.id}`} 
            variant="outline-primary" 
            size="sm"
            className="flex-grow-1"
          >
            View Details
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleAddToCart}
            className="flex-grow-1"
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard