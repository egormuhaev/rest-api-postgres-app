const db = require('../db')

class UserController {
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) Returning *`, [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res){
        console.log("Get users")
        res.json({message: "success"})
    }

    async getOneUser(req, res){

    }

    async updateUser(req, res){

    }

    async deleteUser(req, res){

    }
}


module.exports = new UserController()