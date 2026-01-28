import { createClient } from '@/app/actions'
import styles from '../../admin.module.css'
import Link from 'next/link'

export default function NewClientPage() {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Add New Client</h1>
                <Link href="/admin" className="btn btn-outline">Cancel</Link>
            </header>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form action={createClient} className={styles.form}>
                    <div className={styles.field}>
                        <label>Client Name</label>
                        <input name="name" type="text" required placeholder="e.g. Acme Corp" />
                    </div>

                    <div className={styles.field}>
                        <label>Logo</label>
                        <input name="logo" type="file" accept="image/*" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Add Client</button>
                </form>
            </div>
        </div>
    )
}
