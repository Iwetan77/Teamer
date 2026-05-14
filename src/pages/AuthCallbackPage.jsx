import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AuthCallbackPage() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && user) {
      const pendingToken = sessionStorage.getItem('pending_invite_token')
      if (pendingToken) {
        sessionStorage.removeItem('pending_invite_token')
        navigate(`/invite?token=${pendingToken}`, { replace: true })
      } else {
        navigate('/dashboard', { replace: true })
      }
    }
  }, [user, loading, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold" style={{ background: 'var(--accent)' }}>T</div>
        <p className="text-sm" style={{ color: 'var(--text-2)' }}>Signing you in...</p>
      </div>
    </div>
  )
}
