import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams} from '@ionic/angular';
import { Product } from 'src/model/product.Model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    productDetail: Product;

    // images: string[];
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param =>
      {
        const id=+param.get('id');
        this.productDetail=this.getArticles(id);

      });
  }

getArticles(id: number): Product {
  return this.dataService.getArticleById(id);
}
}
