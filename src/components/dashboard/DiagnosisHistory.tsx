'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './DashboardWidgets.module.css';
import { DiagnosisHistory as DiagnosisHistoryType } from '@/services/api';

interface DiagnosisHistoryProps {
    history: DiagnosisHistoryType[];
}

export default function DiagnosisHistory({ history }: DiagnosisHistoryProps) {
    // We want the last 6 months generally, or the data provided. 
    // API returns months. Assuming it's sorted or we just take the first N (usually latest are first or last?).
    // Let's assume we want to display the data as given, maybe reversed if it's new-to-old.
    // The API dump shows March 2024, Feb 2024... etc. So it is descending.
    // Charts usually go Left (Old) -> Right (New). So we should reverse it.

    const chartData = [...history].slice(0, 6).reverse().map(item => ({
        month: `${item.month.substring(0, 3)}, ${item.year}`,
        systolic: item.blood_pressure.systolic.value,
        diastolic: item.blood_pressure.diastolic.value,
    }));

    const latest = history[0]; // Latest entry

    return (
        <div className={styles.chartContainer} style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 className={styles.tableTitle}>Diagnosis History</h3>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1, background: '#F4F0FE', borderRadius: '12px', padding: '10px' }}>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={chartData}>
                            <CartesianGrid vertical={false} stroke="#E3E4E6" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis domain={[60, 180]} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="systolic"
                                stroke="#C26EB4"
                                strokeWidth={3}
                                dot={{ r: 4, fill: '#C26EB4' }}
                                activeDot={{ r: 6 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="diastolic"
                                stroke="#7E6CAB"
                                strokeWidth={3}
                                dot={{ r: 4, fill: '#7E6CAB' }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend / Stats Panel */}
                <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#C26EB4' }}></div>
                            <span style={{ fontWeight: 700 }}>Systolic</span>
                        </div>
                        <div style={{ fontSize: '22px', fontWeight: 800 }}>{latest?.blood_pressure.systolic.value}</div>
                        <div style={{ fontSize: '14px' }}>{latest?.blood_pressure.systolic.levels}</div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7E6CAB' }}></div>
                            <span style={{ fontWeight: 700 }}>Diastolic</span>
                        </div>
                        <div style={{ fontSize: '22px', fontWeight: 800 }}>{latest?.blood_pressure.diastolic.value}</div>
                        <div style={{ fontSize: '14px' }}>{latest?.blood_pressure.diastolic.levels}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
