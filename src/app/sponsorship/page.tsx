import Header from '@/components/sponsorship/Header';
import FilterSection from '@/components/sponsorship/FilterSection';
import ChildGrid from '@/components/sponsorship/ChildGrid';
import Footer from '@/components/sponsorship/Footer';
import styles from './page.module.css';

export default function SponsorshipPage() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <FilterSection />
                <ChildGrid />
            </main>
            <Footer />
        </div>
    );
}
