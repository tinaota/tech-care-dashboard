'use client';

import styles from './FilterSection.module.css';

export interface FilterState {
    country: string;
    age: string;
    gender: string;
    sort: string;
}

interface FilterSectionProps {
    filters: FilterState;
    onFilterChange: (key: keyof FilterState, value: string) => void;
    onClearFilters: () => void;
}

export default function FilterSection({ filters, onFilterChange, onClearFilters }: FilterSectionProps) {
    const hasActiveFilters =
        filters.country !== 'All Countries' ||
        filters.age !== 'All Ages' ||
        filters.gender !== 'All';

    return (
        <div className={styles.filterContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Find Your Match</h2>
                {hasActiveFilters && (
                    <a href="#" onClick={(e) => { e.preventDefault(); onClearFilters(); }} className={styles.clearLink}>
                        Clear All Filters
                    </a>
                )}
            </div>

            <div className={styles.controls}>
                <div className={styles.controlGroup}>
                    <label className={styles.label}>Country</label>
                    <select
                        className={`${styles.select} ${filters.country !== 'All Countries' ? styles.activeSelect : ''}`}
                        value={filters.country}
                        onChange={(e) => onFilterChange('country', e.target.value)}
                    >
                        <option>All Countries</option>
                        <option>Kenya</option>
                        <option>Guatemala</option>
                        <option>India</option>
                        <option>Philippines</option>
                        <option>Uganda</option>
                        <option>Columbia</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Age Range</label>
                    <select
                        className={`${styles.select} ${filters.age !== 'All Ages' ? styles.activeSelect : ''}`}
                        value={filters.age}
                        onChange={(e) => onFilterChange('age', e.target.value)}
                    >
                        <option>All Ages</option>
                        <option>0-5</option>
                        <option>6-12</option>
                        <option>13-18</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Gender</label>
                    <select
                        className={`${styles.select} ${filters.gender !== 'All' ? styles.activeSelect : ''}`}
                        value={filters.gender}
                        onChange={(e) => onFilterChange('gender', e.target.value)}
                    >
                        <option>All</option>
                        <option>Boy</option>
                        <option>Girl</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Sort By</label>
                    <select
                        className={styles.select}
                        value={filters.sort}
                        onChange={(e) => onFilterChange('sort', e.target.value)}
                    >
                        <option>Longest Waiting</option>
                        <option>Youngest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
