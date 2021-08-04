import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spin8421';

  name = "Davor";
  
buttonDisabled = false;

  constructor(){

    

  }

clickNaKomponente(e: any){
console.log(e)
}

eventIzKomponente(e: any){
console.log('click event na komponenti')
}

varijablaIzAppKomponente(e: any){
  console.log('1')
}

  polje= [
    {
      id: 1,
      term: "dns",
      descirption: "domain name server"
    },

    {
      id: 2,
      term: "dns",
      descirption: "domain name server"
    }
  ];

}
