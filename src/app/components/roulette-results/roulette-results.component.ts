import { Component, OnInit } from '@angular/core';
import { RouletteService } from 'src/app/services/roulette.service';

@Component({
  selector: 'app-roulette-results',
  templateUrl: './roulette-results.component.html',
  styleUrls: ['./roulette-results.component.css']
})
export class RouletteResultsComponent implements OnInit {

  rouletteResults: any;
  currentRoulette = null;
  currentIndex = -1;
  user = '';
  item = '';

  constructor(private rouletteService: RouletteService) { }

  ngOnInit(): void {
    this.retrieveRouletteResults();
  }
  

  retrieveRouletteResults(): void {
    this.rouletteService.getAll()
    .subscribe(
      data => {
        this.rouletteResults = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveRouletteResults();
    this.currentRoulette = null;
    this.currentIndex = -1;
  }

  setActiveRoulette(roulette, index): void{
    this.currentRoulette = roulette;
    this.currentIndex = index;
  }

  searchResults(): void {
    this.rouletteService.findByTotal(this.user, this.item)
    .subscribe(
      data =>{
        this.rouletteResults = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }

}
