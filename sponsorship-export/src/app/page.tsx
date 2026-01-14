'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import FilterSection, { FilterState } from '@/components/FilterSection';
import ChildGrid from '@/components/ChildGrid';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function SponsorshipPage() {
    const [filters, setFilters] = useState<FilterState>({
        country: 'All Countries',
        age: 'All Ages',
        gender: 'All',
        sort: 'Longest Waiting'
    });

    const handleFilterChange = (key: keyof FilterState, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            country: 'All Countries',
            age: 'All Ages',
            gender: 'All',
            sort: 'Longest Waiting'
        });
    };

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main} id="main-content">
                <FilterSection
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                />
                <ChildGrid filters={filters} />
            </main>
            <Footer />
        </div>
    );
}
