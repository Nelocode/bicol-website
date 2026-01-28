import { getClients } from '@/app/actions'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function ClientsPage() {
    const clients = await getClients()

    return (
        <div className="container" style={{ padding: '8rem 0' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} /> Volver al Inicio
            </Link>

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nuestros Clientes</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Empresas líderes que han confiado en nuestra experiencia</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
            }}>
                {clients.map(client => (
                    <div key={client.id} className="glass-panel" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspectRatio: '1/1'
                    }}>
                        {client.logo && (
                            <img src={client.logo} alt={client.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
