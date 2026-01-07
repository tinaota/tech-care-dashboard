import React from 'react';
import Image from 'next/image';
import { Search, MoreHorizontal } from 'lucide-react';
import styles from './PatientsSidebar.module.css';
import clsx from 'clsx';
import { Patient } from '@/services/api';

interface PatientsSidebarProps {
    patients: Patient[];
    activePatientName?: string;
}

export default function PatientsSidebar({ patients, activePatientName = 'Jessica Taylor' }: PatientsSidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTitle}>
                <span>Patients</span>
                <Search size={20} color="#072635" />
            </div>

            <div className={styles.navSection}>
                <div className={styles.patientList}>
                    {patients.map((patient, idx) => (
                        <div
                            key={idx}
                            className={clsx(styles.patientItem, patient.name === activePatientName && styles.patientItemActive)}
                        >
                            <Image
                                src={patient.profile_picture}
                                alt={patient.name}
                                width={48}
                                height={48}
                                className={styles.avatar}
                                unoptimized // External URLs from API
                            />
                            <div className={styles.patientInfo}>
                                <span className={styles.patientName}>{patient.name}</span>
                                <span className={styles.patientMeta}>{patient.gender}, {patient.age}</span>
                            </div>
                            <MoreHorizontal size={20} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
