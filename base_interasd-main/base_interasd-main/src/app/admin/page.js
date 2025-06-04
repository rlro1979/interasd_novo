'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth'
import { getInteracoesPorIgreja, atualizarStatusInteracao } from '../../utils/admin'

export default function PainelAdmin() {
    const { token } = useAuth()
    const router = useRouter()

    const [igrejaId] = useState(1) // exemplo fixo
    const [interacoes, setInteracoes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        carregarInteracoes()
    })

    async function carregarInteracoes() {
        setLoading(true)
        try {
            const data = await getInteracoesPorIgreja(igrejaId, token)
            setInteracoes(data.interacoes || [])
        } catch {
            alert('Erro ao carregar interações')
        } finally {
            setLoading(false)
        }
    }

    async function handleStatusUpdate(co_interacao, novoStatus, co_responsavel = 3) {
        try {
            await atualizarStatusInteracao(co_interacao, novoStatus, co_responsavel, token)
            alert('Status atualizado com sucesso!')
            carregarInteracoes()
        } catch {
            alert('Erro ao atualizar status')
        }
    }

    if (loading) return <p>Carregando interações da igreja...</p>

    return (
        <div>
            <h1>Painel Administrativo</h1>

            <form>
            <label forhtml="nome">Nome ou Identificador:</label>
            <input type="text" id="nome" name="nome" required/>

            <label forhtml="tipo_acao">Tipo de Ação:</label>
            <input type="text" id="tipo_acao" name="tipo_acao" required/>

            <label forhtml="resposta">Resposta:</label>
            <textarea id="resposta" name="resposta" rows="4" required></textarea>

            <label forhtml="estado_acao">Estado da Ação:</label>
            <input type="text" id="estado_acao" name="estado_acao" required/>

            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
