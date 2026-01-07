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
    <main style={{ minHeight: '100vh', background: '#F6F7F8' }}>
      <Topbar />

      <div style={{ display: 'flex', gap: '32px', padding: '0 18px 18px 18px', height: 'calc(100vh - 120px)' }}>
        {/* Left Sidebar */}
        <div style={{ flexShrink: 0 }}>
          <PatientsSidebar patients={patients} activePatientName={selectedPatient?.name} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px', overflowY: 'auto', paddingBottom: '20px' }}>
          {selectedPatient && (
            <>
              <DiagnosisHistory history={selectedPatient.diagnosis_history} />
              <VitalsCards latestVitals={selectedPatient.diagnosis_history[0]} />
              <DiagnosticList diagnoses={selectedPatient.diagnostic_list} />
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div style={{ width: '360px', flexShrink: 0 }}>
          {selectedPatient && <PatientProfile patient={selectedPatient} />}
        </div>
      </div>
    </main>
  );
}
