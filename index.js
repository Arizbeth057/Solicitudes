const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Endpoint para registrar solicitudes que enviará n8n
app.post('/api/solicitudes', async (req, res) => {
    try {
        const { folio, titulo, descripcion, categoria, prioridad, reporta, correo } = req.body;
        const query = `
            INSERT INTO solicitudes (folio, titulo, descripcion, categoria, prioridad, reporta, correo)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;
        const values = [folio, titulo, descripcion, categoria, prioridad, reporta, correo];
        const result = await pool.query(query, values);
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend corriendo localmente en el puerto ${PORT}`));