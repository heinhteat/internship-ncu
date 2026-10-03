export interface Advisor {
    id?: number;
    advisorId: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    maxStudents?: number;
}