const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = (app) => {
  const login = async (req, res) => {
    try {
      if (!req.body.code || !req.body.password) { return res.status(400).send('Informe Código e Senha!') }

      const user = await app
        .database('users')
        .where({ code: req.body.code })
        .first()

      if (!user) { return res.status(401).send('Código ou Senha inválidos!') }

      const isMatch = await bcrypt.compare(
        String(req.body.password),
        String(user.password)
      )

      if (!isMatch) { return res.status(401).send('Código ou Senha inválidos!') }

      const now = Math.floor(Date.now() / 1000)

      const payload = {
        id: user.id,
        name: user.name,
        code: user.code,
        iat: now,
        exp: now + 60 * 60 * 24 * 3
      }

      const loggedUser = {
        user: { ...payload },
        token: jwt.encode(payload, 'text')
      }

      return res.status(200).send(loggedUser)

    } catch (error) {
      return res.status(500).send(error.toString())
    }
  }

  return { login }
}