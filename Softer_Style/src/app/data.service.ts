import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { Product } from 'src/model/product.Model';
import { __values } from 'tslib';

// const ARTICLES_KEY = 'my-articles';

@Injectable({
  providedIn: 'root'
})


export class DataService {
   articles: Product[] = [
    {
      id: 1,
      nom: 'casquette',
      prix: 1000,
      taille: 40,
      description:'Reveillé lechoco en vous avec cet pantalon',
      infoSup:  {
      statut: 'Indisponible',
      categorie: 'Homme',
      couleur:'rouge'
      },
      image: 'assets/images/product3/casquette.jpg',
   },
       {
             id: 2,
              nom: 'Chaussure',
              prix: 10,
              taille: 25,
              description: 'Bonne qualité',
              infoSup:  {
                statut: 'En solde',
                categorie: 'Femme',
                couleur:'rouge'
              },
              image: 'assets/images/product2/2.jpg',
            },
            {
              id: 3,
              nom: 'robe',
              prix: 30,
              taille: 25,
              description: 'Avec cette robe soyes simplement vous meme',
              infoSup:  {
                statut: 'disponible',
                categorie: 'Femme',
                couleur:'rouge'
              },
              image: 'assets/images/product4/robe.jpg',
            },
            {
              id: 5,
              nom: 'Pantalon',
              prix: 5,
              taille: 25,
              description: 'Pantalon en tissu de bonne qualité',
              infoSup:  {
                statut: 'solde',
                categorie: 'Homme',
                couleur:'gris'
              },
              image: 'assets/images/product5/pantalon.jpg'
 }

  ];


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController,
    public modalCtrl: ModalController,
  ) { }
  getArticles(): Product[]{
   return [... this.articles];
  }
  getArticleById(id: number): Product | undefined{
    const article = this.articles.find(value => value.id === id);
    return article;
  }

  addArticle(article: Product): void {
    article.id = this.getId();
    this.articles.push(article);
    console.log(this.articles);
  }

 private getId(): number{
  let idMax= 0;
  this.articles.forEach(article => {
    if(article.id && article.id > idMax){
      idMax =article.id;
    }
  });
  return idMax+1;
}
}
