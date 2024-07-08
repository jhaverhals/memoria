import { Kerkdienst } from "./components/kerkdienst";

export class Memoria {
    kerkdienst = new Kerkdienst(new Date(2024, 7, 7, 10));

    sayHello(): string {
        console.log('yes, hello ' + this.kerkdienst.dagdeel());
        return 'hello';
    }
}