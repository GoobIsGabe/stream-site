import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  constructor(private coinService: CoinService) { }
  
  coinNumber: any;
  currentCoin = null;
  currentIndex = -1;
  user = '';
  coin = '';
  
  ngOnInit(): void {
    this.retrieveCoinResults();
  }

  retrieveCoinResults(): void {
    this.coinService.getAll()
    .subscribe(
      data => {
        this.coinNumber = data;
        this.coinNumber.sort((a, b) => new Date(b.Occurred).getTime() - new Date(a.Occurred).getTime());
         console.log(data);
      },
      error => {
        // console.log(error);
      });
  }
  refreshList(): void {
    this.retrieveCoinResults();
    this.currentCoin = null;
    this.currentIndex = -1;
  }

  setActiveCoin(coin, index): void{
    this.currentCoin = coin;
    this.currentIndex = index;
  }

  searchResults(): void {
    this.coinService.findByUser(this.user)
    .subscribe(
      data =>{
        this.coinNumber = data;
        // console.log(data);
      },
      error =>{
        // console.log(error);
      });
  }

}
