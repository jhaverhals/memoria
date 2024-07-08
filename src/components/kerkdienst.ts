export class Kerkdienst {
    id: number;
    notities: string;

    constructor(public datumTijd: Date) {

    }

    dagdeel(): string {
        if (this.datumTijd.getHours() < 12)
            return 'ochtend';
        else if (this.datumTijd.getHours() < 18)
            return 'middag';
        else
            return 'avond'; 
    }
} 