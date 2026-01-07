export interface DiagnosisHistory {
    month: string;
    year: number;
    blood_pressure: {
        systolic: { value: number; levels: string };
        diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
}

export interface Diagnostic {
    name: string;
    description: string;
    status: string;
}

export interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string; // The API returns this as string?
    insurance_type: string;
    diagnosis_history: DiagnosisHistory[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
}

export async function getPatients(): Promise<Patient[]> {
    const username = 'coalition';
    const password = 'skills-test';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    try {
        const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                'Authorization': `Basic ${auth}`
            },
            cache: 'no-store' // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
