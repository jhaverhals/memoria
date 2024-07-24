export class Kerkdienst {
  id!: number
  notities!: string
  plaats!: string        // via kerkelijkeGemeente
  denominatie!: string   // via kerkelijkeGemeente.kerkelijkeDenominatie
  eigenschap!: string    // via kerkdienstEigenschappen.kerkdienstEigenschap
  categorie!: string     // via kerkdienstEigenschappen.kerkdienstEigenschap

  constructor(public datumTijd: Date) {}

}
