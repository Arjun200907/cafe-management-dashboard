-- CaféFlow persistent PostgreSQL store (auto-created by server.js).
-- JSONB snapshot preserves the complete demo model and its historical relationships.
-- For a production multi-user application, migrate to normalized tables and transactions.
CREATE TABLE IF NOT EXISTS cafe_store (
 id INTEGER PRIMARY KEY CHECK(id = 1),
 payload JSONB NOT NULL,
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
