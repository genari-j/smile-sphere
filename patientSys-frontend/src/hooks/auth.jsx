import React, { createContext, useState, useContext } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem("@PatientsApp:token")
        const user = localStorage.getItem("@PatientsApp:user")

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user: JSON.parse(user) }
        }

        return {}
    })

    const signIn = async (code, password) => {
        const userAuth = {
            code: code,
            password: password
        }

        const response = await api.post("login", userAuth)
        if (response.data) {
            const { user, token } = response.data
            setData({ token, user })
            localStorage.setItem("@PatientsApp:user", JSON.stringify(response.data.user))
            localStorage.setItem("@PatientsApp:token", response.data.token)
            const authToken = `Bearer ${response.data.token}`
            api.defaults.headers.authorization = authToken
        }
    }

    const signOut = async () => {
        localStorage.removeItem('@PatientsApp:user')
        localStorage.removeItem('@PatientsApp:token')
        setData({})
    }

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth deve ser usado por dentro de um AuthProvider")
    }

    return context
}