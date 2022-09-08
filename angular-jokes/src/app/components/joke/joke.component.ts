import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() jokeOrQuote: boolean | undefined;
  @Output() saveOut = new EventEmitter();
  @Output() favoritize = new EventEmitter();
  contents: string = '';


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  save() {
    if (this.contents) {
      this.saveOut.emit(this.contents);
    }
  }

  getJokeOrQuote(): void {
    switch (this.title) {
      case 'Dad Jokes':
        this.httpClient.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } }).subscribe((data: any) => {
          console.log(data);
          this.contents = data.joke;
        });
        break;
      case 'Chuck Norris Jokes':
        this.httpClient.get('https://api.chucknorris.io/jokes/random').subscribe((data: any) => {
          console.log(data);
          this.contents = data.value;
        });
        break;
      case 'Ron Swanson Quotes':
        this.httpClient.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes').subscribe((data: any) => {
          console.log(data);
          this.contents = data;
        });
        break;
      default:
        return;
    }
  }

  favoritze() {
    if (this.contents) {
      this.favoritize.emit(this.contents);
    }
  }

}
