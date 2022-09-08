import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jokes';

  save(joke: string) {
    console.log(joke);
  }

  favoritize(quote: string) {
    console.log(quote);
  }
}
