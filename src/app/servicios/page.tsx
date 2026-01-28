import { getServices } from '@/app/actions'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function ServicesIndexPage() {
    const services = await getServices()

    return (
        <div className="container" style={{ padding: '8rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nuestros Servicios</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Soluciones tecnológicas diseñadas para tu crecimiento</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {services.map(service => (
                    <Link href={`/servicios/${service.slug}`} key={service.id} className="glass-panel" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        textDecoration: 'none'
                    }}>
                        {service.coverImage && (
                            <div style={{ height: '200px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                                <img src={service.coverImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        )}
                        <h3 style={{ fontSize: '1.5rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', flex: 1 }}>{service.shortDescription}</p>
                        <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                            Ver más <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
