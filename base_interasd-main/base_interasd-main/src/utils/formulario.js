// utils/api/formulario.js
import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// 🔹 Criar nova interação/formulário
export async function criarFormulario(data, token) {
    try {
        const response = await API.post('/formulario', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao enviar formulário')
    }
}

// 🔹 Consultar formulário específico por número de interação
export async function getFormularioDetalhado(co_interacao, token) {
    try {
        const response = await API.get(`/formulario/${co_interacao}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar formulário')
    }
}
