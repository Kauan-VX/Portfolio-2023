import { Component } from '@angular/core';



document.addEventListener('visibilitychange', (event) => {
  if (document.visibilityState === 'visible') {
    document.title = "Seja bem vindo";
  } else {
    document.title = "Hey, volte aqui...";
  }
});



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}
