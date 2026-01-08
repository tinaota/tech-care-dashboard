import React from 'react';
import Image from 'next/image';
import styles from './DashboardWidgets.module.css';
import clsx from 'clsx';
import { DiagnosisHistory } from '@/services/api';

interface VitalsCardsProps {
    latestVitals: DiagnosisHistory;
}

export default function VitalsCards({ latestVitals }: VitalsCardsProps) {
    if (!latestVitals) return null;

    const { respiratory_rate, temperature, heart_rate } = latestVitals;

    return (
        <div className={styles.vitlasContainer}>
            {/* Respiratory Rate */}
            <div className={clsx(styles.vitalCard, styles.bgBlue)}>
                <div className={styles.vitalIcon}>
                    <Image src="/respiratory.svg" width={40} height={40} alt="Respiratory" />
                </div>
                <span className={styles.vitalLabel}>Respiratory Rate</span>
                <span className={styles.vitalValue}>{respiratory_rate.value} bpm</span>
                <span className={styles.vitalStatus}>{respiratory_rate.levels}</span>
            </div>

            {/* Temperature */}
            <div className={clsx(styles.vitalCard, styles.bgPink)}>
                <div className={styles.vitalIcon}>
                    <Image src="/temperature.svg" width={40} height={40} alt="Temperature" />
                </div>
                <span className={styles.vitalLabel}>Temperature</span>
                <span className={styles.vitalValue}>{temperature.value}°F</span>
                <span className={styles.vitalStatus}>{temperature.levels}</span>
            </div>

            {/* Heart Rate */}
            <div className={clsx(styles.vitalCard, styles.bgPink)}>
                <div className={styles.vitalIcon}>
                    <Image src="/heart.svg" width={40} height={40} alt="Heart Rate" />
                </div>
                <span className={styles.vitalLabel}>Heart Rate</span>
                <span className={styles.vitalValue}>{heart_rate.value} bpm</span>
                <span className={clsx(styles.vitalStatus, heart_rate.levels !== 'Normal' && styles.statusWarning)}>
                    {heart_rate.levels}
                </span>
            </div>
        </div>
    );
}
