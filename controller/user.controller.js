const db = require('../db')

class UserController {
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) Returning *', [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res){
        const allPersons = await db.query('SELECT * FROM person')
        res.json(allPersons.rows)
    }

    async getOneUser(req, res){
        const id = req.params.id;
        const onePerson = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(onePerson.rows)
    }

    async updateUser(req, res){
        const {id, name,  surname} = req.body
        const person = await db.query('UPDATE person SET name = $1, surname = $2 where id = $3 Returning *', [name, surname, id])
        res.json(person.rows)
    }

    async deleteUser(req, res){
        const id = req.params.id;
        const onePerson = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.json(onePerson.rows[0])
    } 
}


module.exports = new UserController()