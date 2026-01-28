import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            zIndex: 100,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.8)', // Light glass for Stripe feel
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/logo.png" alt="BICOL Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
                </Link>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem' }}>
                    <Link href="/servicios" style={{ color: 'var(--text-main)' }}>Servicios</Link>
                    <Link href="/clientes" style={{ color: 'var(--text-main)' }}>Clientes</Link>
                    <Link href="#contacto" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </nav>
    )
}
