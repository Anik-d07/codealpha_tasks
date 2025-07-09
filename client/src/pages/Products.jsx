import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('name')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const productsPerPage = 8

  // Sample products data
  const allProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4,
      category: "electronics",
      image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 299.99,
      rating: 5,
      category: "electronics",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced smartwatch with health monitoring features"
    },
    {
      id: 3,
      name: "Laptop Stand Adjustable",
      price: 49.99,
      rating: 4,
      category: "electronics",
      image: "https://images.pexels.com/photos/26891720/pexels-photo-26891720.jpeg?_gl=1*smbq3h*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjg5NjAkajI1JGwwJGgw",
      description: "Ergonomic laptop stand for better posture"
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: 24.99,
      rating: 5,
      category: "electronics",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Precision wireless mouse with long battery life"
    },
    {
      id: 5,
      name: "Cotton T-Shirt",
      price: 19.99,
      rating: 4,
      category: "clothing",
      image: "https://images.pexels.com/photos/30624162/pexels-photo-30624162.jpeg?_gl=1*zl5eb0*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjkwOTYkajI0JGwwJGgw",
      description: "Comfortable cotton t-shirt in various colors"
    },
    {
      id: 6,
      name: "Denim Jeans",
      price: 59.99,
      rating: 5,
      category: "clothing",
      image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?_gl=1*1ls9zcj*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjkxNjIkajQzJGwwJGgw",
      description: "Classic denim jeans with perfect fit"
    },
    {
      id: 7,
      name: "Table Lamp",
      price: 39.99,
      rating: 4,
      category: "home",
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?_gl=1*c0asqa*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjkyMzkkajMzJGwwJGgw",
      description: "Modern table lamp with adjustable brightness"
    },
    {
      id: 8,
      name: "Coffee Mug Set",
      price: 24.99,
      rating: 5,
      category: "home",
      image: "https://images.pexels.com/photos/6312175/pexels-photo-6312175.jpeg?_gl=1*wb1wey*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjk0NTUkajQ3JGwwJGgw",
      description: "Set of 4 ceramic coffee mugs"
    },
    {
      id: 9,
      name: "JavaScript Guide",
      price: 29.99,
      rating: 5,
      category: "books",
      image: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete guide to JavaScript programming"
    },
    {
      id: 10,
      name: "Cooking Essentials",
      price: 34.99,
      rating: 4,
      category: "books",
      image: "https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?_gl=1*2sxi9r*_ga*MTAyNDcwNTQwMC4xNzUyMDY4OTI1*_ga_8JE65Q40S6*czE3NTIwNjg5MjUkbzEkZzEkdDE3NTIwNjkzOTMkajEzJGwwJGgwhttps://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Essential cooking techniques and recipes"
    },
    {
      id: 11,
      name: "Smartphone Case",
      price: 14.99,
      rating: 4,
      category: "electronics",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Protective case for smartphones"
    },
    {
      id: 12,
      name: "Running Shoes",
      price: 89.99,
      rating: 5,
      category: "clothing",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comfortable running shoes for all terrains"
    }
  ]

  useEffect(() => {
    let filtered = allProducts

    // Filter by search term
    const searchTerm = searchParams.get('search')
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    const categoryParam = searchParams.get('category') || categoryFilter
    if (categoryParam) {
      filtered = filtered.filter(product => product.category === categoryParam)
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setProducts(allProducts)
    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [searchParams, categoryFilter, priceRange, sortBy])

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Filters</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home & Living</option>
                  <option value="books">Books</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
                <Form.Range
                  min={0}
                  max={1000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sort By</Form.Label>
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Products</h2>
            <p className="text-muted">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          <Row>
            {currentProducts.map(product => (
              <Col key={product.id} md={6} lg={4} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <h4>No products found</h4>
              <p className="text-muted">Try adjusting your filters or search terms</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </Pagination>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Products