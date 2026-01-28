import { getService } from '@/app/actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = await getService(slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="container" style={{ padding: '8rem 0' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} /> Volver al Inicio
            </Link>

            <article className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                {service.coverImage && (
                    <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
                        <img src={service.coverImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                )}

                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.title}</h1>

                <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
                    {service.longDescription}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem' }}>¿Te interesa este servicio?</h3>
                    <Link href="/#contacto" className="btn btn-primary">
                        Solicitar Asesoría
                    </Link>
                </div>
            </article>
        </div>
    )
}
