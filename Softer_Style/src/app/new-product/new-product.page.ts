import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Product } from 'src/model/product.Model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  error: boolean | undefined;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  productForm: FormGroup = this.fb.group({
    nom: [[], Validators.required],
    prix: [[], Validators.required],
    taille: [[], Validators.required],
    description: [[], Validators.required],
    statut: [[], Validators.required],
    categorie: [[], Validators.required],
    couleur: [[], Validators.required],
    image:[[], Validators.required],
  });

  addProduct(){
    if(this.productForm.valid){
      const article: Product = {
        id: this.productForm.get('id')?.value,
        nom: this.productForm.get('nom')?.value,
        taille: this.productForm.get('taille')?.value,
        prix: this.productForm.get('prix')?.value,
        description: this.productForm.get('description')?.value,
        infoSup : {
          statut: this.productForm.get('statut')?.value,
          categorie: this.productForm.get('categorie')?.value,
          couleur: this.productForm.get('couleur')?.value,
        },
        image: this.productForm.get('image')?.value
      };

      this.dataService.addArticle(article);
      this.previousState();
   }
  }

  previousState(){
    window.history.back();
  }
}
