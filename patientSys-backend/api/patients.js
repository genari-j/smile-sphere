module.exports = (app) => {

    // Pegando todos os pacientes (LISTAR)
    const getAll = async (req, res) => {

        const allPatients = await app.database("patients").select('*')

        const patients = allPatients.map(patient => {
            const [newBirth] = patient.birth.toISOString().split("T")

            return {
                ...patient,
                birth: newBirth
            }
        })

        return res.json(patients)
    }

    // Selecionando pelo ID
    const getById = async (req, res) => {

        const idPatient = req.params.id

        const patientExists = await app.database("patients").where({ id: idPatient }).first()

        if (!patientExists) {
            return res.status(404).json({ error: "Paciente não encontrado" })
        }

        const [newBirth] = patientExists.birth.toISOString().split("T")
        const [newTreatment] = patientExists.treatment.toISOString().split("T")

        const patient = {
            ...patientExists,
            birth: newBirth,
            treatment: newTreatment
        }

        return res.json(patient)

    }

    // Criando novo paciente
    const newPatient = async (req, res) => {
        const patient = { ...req.body }

        if (req.params.id) {
            patient.id = req.params.id
        }

        if (!patient.id) {
            if (!patient.name) {
                return res.json({ error: "Nome inválido" })
            }

            if (!patient.email) {
                return res.json({ error: "Email inválido" })
            }

            if (!patient.birth) {
                return res.json({ error: "Data nascimento inválido" })
            }

            if (!patient.genre) {
                return res.json({ error: "Gênero inválido" })
            }

            if (!patient.ocupation) {
                return res.json({ error: "Profissão inválida" })
            }

            if (!patient.civil) {
                return res.json({ error: "Estado civil inválido" })
            }

            if (!patient.address) {
                return res.json({ error: "Endereço inválido" })
            }

            if (!patient.complement) {
                return res.json({ error: "Complemento inválido" })
            }

            if (!patient.city) {
                return res.json({ error: "Cidade inválida" })
            }

            if (!patient.state) {
                return res.json({ error: "Estado inválido" })
            }

            if (!patient.zipcode) {
                return res.json({ error: "CEP inválido" })
            }

            if (!patient.telephone) {
                return res.json({ error: "Telefone inválido" })
            }

            if (!patient.cell) {
                return res.json({ error: "Celular inválido" })
            }

            if (!patient.treatment) {
                return res.json({ error: "Incío de tratamento inválido" })
            }

            if (!patient.weight) {
                return res.json({ error: "Peso inválido" })
            }

            if (!patient.height) {
                return res.json({ error: "Altura inválida" })
            }

            if (!patient.comorbidity) {
                return res.json({ error: "Comorbidades ou doença crônica inválido" })
            }

            if (!patient.antecedent) {
                return res.json({ error: "Antecedentes pessoais inválido" })
            }

            const patientExists = await app
                .database("patients")
                .where({
                    email: patient.email,
                })
                .first()

            if (patientExists) {
                return res.status(400).json({ error: "O paciente já existe" })
            }
        }

        if (patient.id) {
            const patientExists = await app
                .database("patients")
                .where({
                    id: patient.id,
                })
                .first()

            if (!patientExists) {
                return res.status(404).json({ error: "O paciente não existe" })
            }
        }

        if (req.params.id) {
            await app
                .database("patients")
                .update(patient)
                .where({ id: patient.id })
                .then((_) => res.status(200).send())
                .catch((err) => res.status(500).send(err))

        } else {
            await app
                .database("patients")
                .insert(patient)
                .then((_) => res.status(201).send())
                .catch((err) => res.status(500).send(err))
        }

    }

    // Deletando paciente
    const removePatient = async (req, res) => {

        const idPatient = req.params.id

        if (!idPatient) {
            return res.status(400).json({ error: "Id do paciente não informado" })
        }

        const patientExists = await app.database("patients").where({ id: idPatient }).first()

        if (!patientExists) {
            return res.status(404).json({ error: "Paciente não encontrado" })
        }

        await app.database("patients").where({ id: idPatient }).del()

        return res.status(204).send()
    }

    return { getAll, getById, newPatient, removePatient }

}