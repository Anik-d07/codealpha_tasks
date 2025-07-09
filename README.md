🛒 E-Commerce App (MERN Stack)
A simple full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse products, add them to cart, and proceed to checkout.

🚀 Features
Product listing with quantity control

Product detail view

Add to Cart / Remove from Cart

Checkout page

User registration & login (if added)

Responsive UI with Bootstrap

🛠 Tech Stack
Frontend	          Backend	                  Database
React.js (Vite)	    Node.js + Express.js	    MongoDB
Bootstrap 5	        REST API	                Mongoose

📁 Folder Structure
bash
Copy
Edit
ecommerce2/
├── client/       # React frontend (Vite)
│   └── src/
├── server/       # Express backend
│   └── routes/, models/
├── .gitignore
├── README.md
🔧 How to Run Locally
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Anik-d07/codealpha_tasks.git
cd ecommerce2
2. Install Frontend & Backend Dependencies
bash
Copy
Edit
cd client
npm install
cd ../server
npm install
3. Create .env in /server/ with:
ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
4. Start the Servers
bash
Copy
Edit
# Start backend
cd server
npm run dev

# In a new terminal, start frontend
cd client
npm run dev
