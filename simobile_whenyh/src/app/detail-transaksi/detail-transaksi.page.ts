import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaksiService, Transaksi } from '../transaksi.service';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
  standalone: false,
})
export class DetailTransaksiPage implements OnInit {
  index: number = 0;
  transaksi: Transaksi | undefined;

  constructor(private route: ActivatedRoute, private transaksiService: TransaksiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.transaksi = this.transaksiService.getRiwayat()[this.index];
    })
  }

}
