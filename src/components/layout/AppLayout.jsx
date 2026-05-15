import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { NotificationBell } from '../ui/NotificationBell'

export function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar — never scrolls */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b z-30"
          style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
          {/* Hamburger on mobile, empty spacer on desktop */}
          <button
            className="p-1.5 rounded-lg lg:hidden"
            style={{ background: 'var(--surface-2)' }}
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="hidden lg:block" />

          <NotificationBell />
        </div>

        {/* Scrollable page content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-4 lg:p-6 animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
