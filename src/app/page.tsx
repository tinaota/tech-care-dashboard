import styles from './page.module.css';
import Topbar from '@/components/layout/Topbar';
import PatientsSidebar from '@/components/layout/PatientsSidebar';
import DiagnosisHistory from '@/components/dashboard/DiagnosisHistory';
import VitalsCards from '@/components/dashboard/VitalsCards';
import DiagnosticList from '@/components/dashboard/DiagnosticList';
import PatientProfile from '@/components/dashboard/PatientProfile';
import { getPatients } from '@/services/api';

export default async function Home() {
  const patients = await getPatients();
  const selectedPatient = patients.find(p => p.name === 'Jessica Taylor') || patients[0];

  return (
    <main className={styles.page}>
      <Topbar />

      <div className={styles.contentWrapper}>
        <div className={styles.leftSidebar}>
          <PatientsSidebar patients={patients} activePatientName={selectedPatient?.name} />
        </div>

        <div className={styles.mainColumn}>
          {selectedPatient && (
            <>
              <DiagnosisHistory history={selectedPatient.diagnosis_history} />
              <VitalsCards latestVitals={selectedPatient.diagnosis_history[0]} />
              <DiagnosticList diagnoses={selectedPatient.diagnostic_list} />
            </>
          )}
        </div>

        <div className={styles.rightSidebar}>
          {selectedPatient && <PatientProfile patient={selectedPatient} />}
        </div>
      </div>
    </main>
  );
}
