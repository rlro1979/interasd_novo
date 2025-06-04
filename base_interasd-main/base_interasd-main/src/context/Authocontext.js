'use client'
import { createContext, useEffect, useState } from 'react'
import { getUserFromStorage, saveUserToStorage, clearUserFromStorage } from '../utils/storage'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const stored = getUserFromStorage()
        if (stored?.user && stored?.token) {
            setUser(stored.user)
            setToken(stored.token)
        }
    }, [])

    function login(userData, tokenValue) {
        setUser(userData)
        setToken(tokenValue)
        saveUserToStorage(userData, tokenValue)
    }

    function logout() {
        setUser(null)
        setToken(null)
        clearUserFromStorage()
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
