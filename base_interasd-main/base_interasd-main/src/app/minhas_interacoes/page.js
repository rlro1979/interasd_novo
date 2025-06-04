'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { getInteracoesUsuario } from '../../utils/usuario'

export default function MinhasInteracoes() {
    const { token, user } = useAuth()
    const router = useRouter()
    const [interacoes, setInteracoes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getInteracoesUsuario(token, user?.id || user?.co_usuario || 1)
            .then((data) => setInteracoes(data.interacoes || []))
            .catch(() => alert('Erro ao buscar interações'))
            .finally(() => setLoading(false))
    })

    if (loading) return <p>Carregando suas interações...</p>
    if (interacoes.length === 0) return <p>Você ainda não enviou nenhuma interação.</p>

    return (
        <div>
            <h1>Minhas Interações</h1>

            {/* Aqui os alunos devem exibir cada interação */}
            {/* Com data, status, igreja, formulário e ações */}
            {/* Exemplo: interacoes.map(...) com layout customizado */}
        </div>
    )
}
