import React from 'react';
import Image from 'next/image';
import { Calendar, Phone, ShieldCheck } from 'lucide-react';
import styles from './PatientProfile.module.css';
import { Patient } from '@/services/api';

interface PatientProfileProps {
    patient: Patient;
}

export default function PatientProfile({ patient }: PatientProfileProps) {
    // Parsing Date of Birth "08/23/1996" or similar format from API to "August 23, 1996"
    // Assuming API gives a standard string.

    return (
        <div className={styles.profileCard}>
            <div className={styles.header}>
                <Image
                    src={patient.profile_picture}
                    width={200}
                    height={200}
                    alt={patient.name}
                    className={styles.avatar}
                    unoptimized
                />
                <h2 className={styles.name}>{patient.name}</h2>
            </div>

            <div className={styles.infoList}>
                <div className={styles.infoItem}>
                    <div className={styles.iconCircle}><Calendar size={20} /></div>
                    <div>
                        <div className={styles.label}>Date of Birth</div>
                        <div className={styles.value}>{patient.date_of_birth}</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.iconCircle}><BooleanIcon gender={patient.gender} /></div>
                    <div>
                        <div className={styles.label}>Gender</div>
                        <div className={styles.value}>{patient.gender}</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.iconCircle}><Phone size={20} /></div>
                    <div>
                        <div className={styles.label}>Contact Info.</div>
                        <div className={styles.value}>{patient.phone_number}</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.iconCircle}><Phone size={20} /></div>
                    <div>
                        <div className={styles.label}>Emergency Contacts</div>
                        <div className={styles.value}>{patient.emergency_contact}</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.iconCircle}><ShieldCheck size={20} /></div>
                    <div>
                        <div className={styles.label}>Insurance Provider</div>
                        <div className={styles.value}>{patient.insurance_type}</div>
                    </div>
                </div>
            </div>

            <button className={styles.showInfoBtn}>Show All Information</button>
        </div>
    );
}

function BooleanIcon({ gender }: { gender: string }) {
    return <span style={{ fontWeight: 'bold' }}>{gender === 'Female' ? '♀' : '♂'}</span>;
}
