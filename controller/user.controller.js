class UserController {
    async createUser(req, res){
        const {name, surname} = req.body
        console.log(name, surname)
        res.json('ok')
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