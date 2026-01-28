import { createService } from '@/app/actions'
import styles from '../../admin.module.css'
import Link from 'next/link'

export default function NewServicePage() {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Add New Service</h1>
                <Link href="/admin" className="btn btn-outline">Cancel</Link>
            </header>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form action={createService} className={styles.form}>
                    <div className={styles.field}>
                        <label>Title</label>
                        <input name="title" type="text" required placeholder="e.g. Cloud Migration" />
                    </div>

                    <div className={styles.field}>
                        <label>Slug (URL)</label>
                        <input name="slug" type="text" required placeholder="e.g. cloud-migration" />
                    </div>

                    <div className={styles.field}>
                        <label>Short Description</label>
                        <textarea name="shortDescription" rows={3} required placeholder="Brief summary for cards" />
                    </div>

                    <div className={styles.field}>
                        <label>Long Description (Markdown/Text)</label>
                        <textarea name="longDescription" rows={10} placeholder="Full details..." />
                    </div>

                    <div className={styles.field}>
                        <label>Cover Image</label>
                        <input name="coverImage" type="file" accept="image/*" />
                    </div>

                    <button type="submit" className="btn btn-primary">Create Service</button>
                </form>
            </div>
        </div>
    )
}
