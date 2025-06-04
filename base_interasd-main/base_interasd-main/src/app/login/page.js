'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth'
import { loginUsuario } from '@/utils/auth'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login, user } = useAuth(false)
    const router = useRouter()

    async function handleLogin() {
        try {
            const res = await loginUsuario(email, senha)
            login(res.usuario, res.token)
            if (res.usuario.co_perfil === 1) {
                router.push('/admin')
            } else {
                router.push('/minhas_interacoes')
            }
        } catch (err) {
            alert('Erro ao fazer login')
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="login.html" method="POST">
                <input type="text" name="username" placeholder="Usuário" required/>
                <input type="password" name="password" placeholder="Senha" required/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
