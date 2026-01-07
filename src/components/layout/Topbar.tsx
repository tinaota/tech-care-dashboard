import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical } from 'lucide-react';
import styles from './Topbar.module.css';
import clsx from 'clsx';
import Logo from '../../../public/TestLogo.svg'; // Placeholder if needed, or just text

export default function Topbar() {
    return (
        <header className={styles.topbar}>
            <div className={styles.logo}>
                <Image src="/TechCareLogo.svg" alt="Tech.Care" width={150} height={30} style={{ marginRight: '10px' }} />
                {/* Using a text fallback if image missing in first pass, or I can construct the logo */}
            </div>

            <nav className={styles.nav}>
                <Link href="#" className={styles.navLink}>
                    <Home size={18} />
                    <span>Overview</span>
                </Link>
                <Link href="#" className={clsx(styles.navLink, styles.navLinkActive)}>
                    <Users size={18} />
                    <span>Patients</span>
                </Link>
                <Link href="#" className={styles.navLink}>
                    <Calendar size={18} />
                    <span>Schedule</span>
                </Link>
                <Link href="#" className={styles.navLink}>
                    <MessageSquare size={18} />
                    <span>Message</span>
                </Link>
                <Link href="#" className={styles.navLink}>
                    <CreditCard size={18} />
                    <span>Transactions</span>
                </Link>
            </nav>

            <div className={styles.rightSection}>
                <div className={styles.profile}>
                    <Image
                        src="/doctor-profile.png"
                        alt="Dr. Jose Simmons"
                        width={44}
                        height={44}
                        className={styles.profileAvatar}
                        unoptimized
                    />
                    <div className={styles.profileInfo}>
                        <span className={styles.profileName}>Dr. Jose Simmons</span>
                        <span className={styles.profileRole}>General Practitioner</span>
                    </div>
                </div>
                <div className={styles.settings}>
                    <Settings size={20} />
                    <MoreVertical size={20} />
                </div>
            </div>
        </header>
    );
}
