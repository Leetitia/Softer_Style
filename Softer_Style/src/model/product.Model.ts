export interface Product {
  id: number;
  nom: string;
  prix: number;
  taille: number;
  image: string;
  description: string;
  infoSup: Moreinfo;

}

export interface Moreinfo {
statut: string;
categorie: string;
couleur: string;
}
