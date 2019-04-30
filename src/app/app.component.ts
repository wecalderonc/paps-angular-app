import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome : string;
  title = 'paps-angular-app';
  frameworks : {
      framework: string,
      owner : string,
      release : string
  }[];
  public show:boolean = false


  toggle(framework) {
    framework.show = !framework.show;
  }

  constructor(){
      this.welcome = "Puedes ocultar/mostrar cada fila!!!!"

      this.frameworks = [{
          framework : "ANGULAR",
          owner: " GOOGLE",
          release : "14 Septiembre 2016"
      },
      {
          framework : "REACT",
          owner: " FACEBOOK",
          release : "Marzo 2013"
      },
      {
          framework : "VUE",
          owner: "COMMUNITY",
          release : "Febrero 2014"
      }]
  };
}
