import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/Authocontext'
import { useRouter } from 'next/navigation'

export function useAuth(requireAuth = true) {
    const { user, token, login, logout } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (requireAuth && !token) {
            router.replace('/login')
        }
    }, [token, requireAuth])

    return { user, token, login, logout }
}
