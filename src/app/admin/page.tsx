import Link from 'next/link'
import { getServices, getClients } from '@/app/actions'
import styles from './admin.module.css'
import Image from 'next/image'

export default async function AdminDashboard() {
    const services = await getServices()
    const clients = await getClients()

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Admin Dashboard</h1>
                <Link href="/" className="btn btn-outline">Back to Site</Link>
            </header>

            <section className={styles.section}>
                <div className={styles.header}>
                    <h2>Services</h2>
                    <Link href="/admin/servicios/new" className="btn btn-primary">+ Add Service</Link>
                </div>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={`${styles.card} ${styles.serviceCard}`}>
                            {service.coverImage && (
                                <div style={{ position: 'relative', width: '100%', height: '150px' }}>
                                    <img src={service.coverImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            )}
                            <h3>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{service.shortDescription}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.header}>
                    <h2>Clients</h2>
                    <Link href="/admin/clientes/new" className="btn btn-primary">+ Add Client</Link>
                </div>
                <div className={styles.grid}>
                    {clients.map((client) => (
                        <div key={client.id} className={styles.card}>
                            {client.logo && (
                                <img src={client.logo} alt={client.name} />
                            )}
                            <h3>{client.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
