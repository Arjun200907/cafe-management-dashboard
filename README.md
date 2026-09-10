# CaféFlow — Café Management Dashboard

Professional sliding dashboard built with Node.js, Express, PostgreSQL, HTML/CSS/JS and Chart.js.

## Setup
1. Install PostgreSQL and create a database named `cafe_management`.
2. Run `schema.sql` in that database, then run the sample INSERT statements from your café database dataset.
3. Copy `.env.example` to `.env` and update the PostgreSQL password/connection string.
4. In this folder run: `npm install`
5. Run: `npm start`
6. Open: `http://localhost:3000`

## Pages
Dashboard, Orders, Menu Items, Customers, Employees and Inventory.

The dashboard reads live values from PostgreSQL. If today's sample orders use an older date, Today's Revenue will correctly show 0; add current-date orders to test live KPIs.

## Instant preview (no PostgreSQL required)
Open `public/index.html` with a local static server. The dashboard automatically uses built-in demo data if the API is unavailable. For the full live database mode, follow the PostgreSQL setup above.
