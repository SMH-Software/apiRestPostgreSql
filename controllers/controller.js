const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'apirest',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
}

const getUserById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows)
}

const createUser = async (req, res) => {
    const { nom, email } = req.body
    const response = await pool.query('INSERT INTO users (nom, email) VALUES ($1, $2)', [nom, email])
    console.log(response)
   res.json({
       message: "new user added succefully",
       body: {
           user: { nom, email }
       }
   })
}

const updateUser = async (req, res) => {
    const id = req.params.id 
    const {nom, email} = req.body
    const response = await pool.query('UPDATE users SET nom = $1, email = $2 WHERE id = $3', [nom, email, id])
    res.json({message: `users ${id} updated succefully`})
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    res.json({ message: `user ${id} deleted succefully`})
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser, 
    updateUser
}