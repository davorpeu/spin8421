import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-jelo',
  templateUrl: './jelo.component.html',
  styleUrls: ['./jelo.component.scss']
})
export class JeloComponent implements OnInit {

  @Input() jelo: any;
  @Output() eventIzJelo = new EventEmitter<string>();
  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.jelo)
    this.eventIzJelo.emit("bok")
  }

}
