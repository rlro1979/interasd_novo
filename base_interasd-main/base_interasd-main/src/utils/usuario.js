import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export async function getInteracoesUsuario(token) {
    try {
        const response = await API.get('/usuario/interacoes', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar interações do usuário')
    }
}
