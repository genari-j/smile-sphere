module.exports = (app) => {
  // Login
  app.route('/login')
    .post(app.api.login.login)

  // Usuários
  app.route('/users')
    .post(app.api.users.newUser)

  // Patients
  app.route('/patients')
    .all(app.config.passport.authenticate())
    .get(app.api.patients.getAll)
    .post(app.api.patients.newPatient)

  app.route('/patients/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.patients.getById)
    .put(app.api.patients.newPatient)
    .delete(app.api.patients.removePatient)
}