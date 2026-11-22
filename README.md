# Inventory and Data Management System

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017` (or update `MONGO_URI` in `.env`).
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products (supports `category`, `supplier`, `search`, `minPrice`, `maxPrice`, `sort`, `page`, `limit`)
- `GET /api/products/:id` - Get single product by ID
- `PUT /api/products/:id` - Update product details
- `PATCH /api/products/:id/stock` - Adjust stock (`{"change": 10}` or `{"change": -5}`)
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/low-stock` - Low-stock alert report (`quantity <= reorderLevel`)
- `GET /api/products/summary` - Category-wise inventory summary
