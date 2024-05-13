type FieldType = {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    gender: 'Male' | 'Female';
    membershipType: 'Silver' | 'Gold' | 'Premium';
    tnc: boolean;
};

export type {
    FieldType
}