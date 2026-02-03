// testDB.js
console.log("Starting test");
const pool = require('./Database');

(async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log("✅ DB connected! Current time:", rows[0].now);
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  } finally {
    process.exit();
  }
})();

