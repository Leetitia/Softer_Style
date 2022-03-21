import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Product } from 'src/model/product.Model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles: Product[]=[];
  constructor(
    private dataService: DataService,
    public navCtrl: NavController
    ) {}
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(): void {
      this.articles = this.dataService.getArticles
      ();
      this.loadAll();
      }
  loadAll(): void{
    this.articles = this.dataService.getArticles();
  }
  goTo(id: number): void{
    this.navCtrl.navigateForward(`/home/${id}`);
  }
  goToNew(): void{
    this.navCtrl.navigateForward(`/new-product`);
    // return null;
  }
  }
