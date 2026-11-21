# CaféFlow — Final Demo Dashboard

A preloaded, date-aware café dashboard with searchable records, 35 menu items, 100 customers, 10 employees, 30 inventory ingredients, and 30+ days of seeded orders. Revenue, top sellers, and visiting hours derive from the same order data. Charts do not animate.

## Run locally
1. Install Node.js 20+.
2. Run `npm install` and `npm start`.
3. Visit `http://localhost:3000`.
4. Without DATABASE_URL, a local `cafe-data.json` file is created; this file is intentionally excluded from Git.

## Persistent PostgreSQL on Render
1. Create a managed PostgreSQL database (Render Postgres or another provider).
2. Copy its **internal database URL** if database and web service are on Render, otherwise the appropriate external URL.
3. In Render web service > Environment add `DATABASE_URL` with that value. Never commit credentials to GitHub.
4. Set `AUTO_DEMO_ORDERS=true` to simulate a new order every 45 seconds, or `false` to disable simulation.
5. Deploy/redeploy the service. On first connection the server creates `cafe_store` and seeds realistic demo data. Later restarts load the same data.
6. Do not switch databases or delete the `cafe_store` row unless you intend to reset demo records.

**Important:** PostgreSQL persistence uses one JSONB snapshot for this student demo; it is not a normalized multi-user POS architecture. Concurrent web instances may overwrite changes. Use one instance. The sample data and automatic orders are **fictional**. A free Render PostgreSQL database may expire; verify your plan's current retention policy.

## Update your existing website
Extract ZIP, replace your repository files except `.git` and `node_modules`, commit and push in GitHub Desktop; Render redeploys. The existing URL remains the same.

## Routes
GET `/api/dashboard`, `/api/day?date=YYYY-MM-DD`, `/api/orders`, `/api/customers`, `/api/employees`, `/api/menu_items`, `/api/inventory`; POST and PATCH for orders and records.

## Notes
The current UI is an administrative **demo** without login or role-based access control. Do not enter real customer personal data or expose it as a real public business system.
