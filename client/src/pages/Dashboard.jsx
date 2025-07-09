import React, { useState } from 'react'
import { Container, Row, Col, Card, Nav, Tab, Table, Badge } from 'react-bootstrap'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('orders')

  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-15',
      status: 'Delivered',
      total: 159.98,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2025-01-10',
      status: 'Processing',
      total: 89.99,
      items: 2
    },
    {
      id: 'ORD-003',
      date: '2025-01-05',
      status: 'Shipped',
      total: 234.50,
      items: 5
    }
  ]

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success'
      case 'Processing':
        return 'warning'
      case 'Shipped':
        return 'info'
      default:
        return 'secondary'
    }
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body className="text-center">
              <div className="mb-3">
                <i className="fas fa-user-circle fa-5x text-primary"></i>
              </div>
              <h5>John Doe</h5>
              <p className="text-muted">john.doe@email.com</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="orders">Order History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="addresses">Addresses</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="orders">
                <Card>
                  <Card.Header>
                    <h5>Order History</h5>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Items</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>
                              <Badge bg={getStatusVariant(order.status)}>
                                {order.status}
                              </Badge>
                            </td>
                            <td>{order.items}</td>
                            <td>${order.total.toFixed(2)}</td>
                            <td>
                              <a href="#" className="text-decoration-none">
                                View Details
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              <Tab.Pane eventKey="profile">
                <Card>
                  <Card.Header>
                    <h5>Profile Settings</h5>
                  </Card.Header>
                  <Card.Body>
                    <p>Profile settings functionality would go here.</p>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              <Tab.Pane eventKey="addresses">
                <Card>
                  <Card.Header>
                    <h5>Saved Addresses</h5>
                  </Card.Header>
                  <Card.Body>
                    <p>Address management functionality would go here.</p>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              <Tab.Pane eventKey="wishlist">
                <Card>
                  <Card.Header>
                    <h5>Wishlist</h5>
                  </Card.Header>
                  <Card.Body>
                    <p>Wishlist functionality would go here.</p>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard