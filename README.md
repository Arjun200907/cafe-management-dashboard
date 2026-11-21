# CafeFlow — Live Demo Dashboard

## Run locally

1. Install Node.js LTS.
2. In the project folder: `npm install` then `npm start`.
3. Visit http://localhost:3000.

## Deploy to Render

Push **the extracted project files** to your existing GitHub repository (not the ZIP, and not `node_modules`). Render Web Service: build `npm install`, start `node server.js`, free instance. Render automatically uses `PORT`.

## Features

- Live India date and time (Asia/Kolkata), updating every second.
- Rolling last 30 days of **simulated** historical orders on initial setup.
- One **simulated** new order every 45 seconds while the server is running, with KPIs refreshing every 15 seconds.
- Static, non-animated professional charts for current-month sales, popular items, and visit time.
- Date picker to inspect any calendar date.
- Search in Orders, Customers, Employees, Menu Items, and Inventory.
- Add new orders, customers, employees, menu items, inventory entries; edit records and order status.

## Important limitations

This is a **demo system** with generated transactions, not real sales. It stores data in `cafe-data.json` on the server. **Render free web services have an ephemeral filesystem**: on restart, redeploy, or instance replacement, demo records can reset. For durable real-world data and multi-user transactions, migrate the API to a managed PostgreSQL database. Auto demo orders can be disabled with `AUTO_DEMO_ORDERS=false`.

All order timestamps are generated in real time; current-day totals reflect the current India date. Charts are static (animation disabled), but refresh when data changes. Customer count in this demo represents visits/orders, not distinct people.
