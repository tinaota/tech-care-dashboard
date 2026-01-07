import React from 'react';
import styles from './DashboardWidgets.module.css';
import { Diagnostic } from '@/services/api';

interface DiagnosticListProps {
    diagnoses: Diagnostic[];
}

export default function DiagnosticList({ diagnoses }: DiagnosticListProps) {
    return (
        <div className={styles.diagnosisList}>
            <h3 className={styles.tableTitle}>Diagnostic List</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {diagnoses.map((d, i) => (
                        <tr key={i}>
                            <td>{d.name}</td>
                            <td>{d.description}</td>
                            <td>{d.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
