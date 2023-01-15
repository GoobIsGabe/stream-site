import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  triviaResults: any;
  currentTrivia = null;
  currentIndex = -1;
  user = '';
  item = '';

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.retrieveTriviaResults();
  }
  

  retrieveTriviaResults(): void {
    this.triviaService.getAll()
    .subscribe(
      data => {
        this.triviaResults = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveTriviaResults();
    this.currentTrivia = null;
    this.currentIndex = -1;
  }

  setActiveTrivia(trivia, index): void{
    this.currentTrivia = trivia;
    this.currentIndex = index;
  }

  searchResults(): void {
    this.triviaService.findByUser(this.user)
    .subscribe(
      data =>{
        this.triviaResults = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }
}
