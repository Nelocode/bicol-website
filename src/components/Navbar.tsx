"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import { clsx } from 'clsx'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/logo.png" alt="BICOL Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/servicios" className={styles.navLink}>Servicios</Link>
                    <Link href="/clientes" className={styles.navLink}>Clientes</Link>
                    <Link href="#contacto" className={styles.ctaBtn}>
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Trigger */}
                <button
                    className={styles.mobileTrigger}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={clsx(styles.mobileMenuOverlay, isOpen && styles.mobileMenuOpen)}>
                    <Link href="/servicios" className={styles.navLink} onClick={() => setIsOpen(false)}>
                        Servicios
                    </Link>
                    <Link href="/clientes" className={styles.navLink} onClick={() => setIsOpen(false)}>
                        Clientes
                    </Link>
                    <Link href="#contacto" className={styles.ctaBtn} onClick={() => setIsOpen(false)}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </nav>
    )
}
