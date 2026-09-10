require('dotenv').config();
const express=require('express'), cors=require('cors'), {Pool}=require('pg'), path=require('path');
const app=express(); const pool=new Pool({connectionString:process.env.DATABASE_URL});
app.use(cors()); app.use(express.json()); app.use(express.static(path.join(__dirname,'public')));
app.get('/api/dashboard',async(req,res)=>{try{const [kpi,sales,best,low,recent]=await Promise.all([
pool.query(`SELECT COALESCE(SUM(total_amount) FILTER (WHERE order_datetime::date=CURRENT_DATE),0) revenue, COUNT(*) FILTER (WHERE order_datetime::date=CURRENT_DATE) orders, COUNT(DISTINCT customer_id) FILTER (WHERE order_datetime::date=CURRENT_DATE) customers, COALESCE(ROUND(AVG(total_amount) FILTER (WHERE order_datetime::date=CURRENT_DATE),2),0) avg_order FROM orders`),
pool.query(`SELECT order_datetime::date day,SUM(total_amount) sales FROM orders WHERE order_datetime>=CURRENT_DATE-INTERVAL '6 days' GROUP BY 1 ORDER BY 1`),
pool.query(`SELECT mi.name,SUM(oi.quantity)::int quantity,SUM(oi.subtotal) revenue FROM order_items oi JOIN menu_items mi USING(menu_item_id) GROUP BY mi.menu_item_id,mi.name ORDER BY quantity DESC LIMIT 5`),
pool.query(`SELECT * FROM inventory WHERE current_stock<=minimum_stock_level ORDER BY current_stock`),
pool.query(`SELECT o.order_id,o.order_datetime,COALESCE(c.name,'Walk-in') customer,e.name employee,o.total_amount FROM orders o LEFT JOIN customers c USING(customer_id) JOIN employees e USING(employee_id) ORDER BY o.order_datetime DESC LIMIT 8`)]);res.json({kpi:kpi.rows[0],sales:sales.rows,best:best.rows,low:low.rows,recent:recent.rows});}catch(e){res.status(500).json({error:e.message})}});
for(const t of ['customers','employees','menu_items','orders','inventory']) app.get('/api/'+t,async(req,res)=>{try{res.json((await pool.query(`SELECT * FROM ${t} ORDER BY 1`)).rows)}catch(e){res.status(500).json({error:e.message})}});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html'))); app.listen(process.env.PORT||3000,()=>console.log('Cafe dashboard: http://localhost:'+(process.env.PORT||3000)));
