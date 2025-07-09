const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    title: 'Wireless Headphones',
    image: 'https://picsum.photos/200?random=1',
    price: 1200,
    description: 'High-quality wireless headphones.',
  },
  {
    title: 'Smart Watch',
    image: 'https://picsum.photos/200?random=2',
    price: 2500,
    description: 'Feature-packed smart watch.',
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('Database seeded');
  process.exit();
});
