const bcrypt = require("bcrypt")

module.exports = (app) => {

    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    const newUser = async (req, res) => {

        const user = { ...req.body }

        if (req.params.id) {
            user.id = req.params.id
        }

        if (!user.name) {
            return res.json({ error: "Nome inválido" })
        }

        if (!user.password) {
            return res.json({ error: "Senha inválida" })
        }

        if (!user.code) {
            return res.json({ error: "ID inválido" })
        }

        const userExists = await app
            .database("users")
            .where({
                code: user.code,
            })
            .first()

        if (userExists) {
            return res.status(400).json({ error: "O usuário já existe" })
        }

        user.password = encryptPassword(String(req.body.password))

        if (req.params.id) {
            await app
                .database("users")
                .update(user)
                .where({ id: user.id })
                .then((_) => res.status(200).send())
                .catch((err) => res.status(500).send(err))

        } else {
            await app
                .database("users")
                .insert(user)
                .then((_) => res.status(201).send())
                .catch((err) => res.status(500).send(err))
        }

    }

    return { newUser }

}