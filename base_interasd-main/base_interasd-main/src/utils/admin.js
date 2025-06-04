// utils/api/admin.js
import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// 🔹 Consultar todas interações de uma igreja
export async function getInteracoesPorIgreja(co_igreja, token) {
    try {
        const response = await API.get(`/admin/interacoes/${co_igreja}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar interações da igreja')
    }
}

// 🔹 Atualizar status da interação
export async function atualizarStatusInteracao(co_interacao, status, co_responsavel, token) {
    try {
        const response = await API.patch(
            `/admin/interacoes/${co_interacao}`,
            {
                status,
                co_responsavel,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        throw new Error('Erro ao atualizar status')
    }
}
