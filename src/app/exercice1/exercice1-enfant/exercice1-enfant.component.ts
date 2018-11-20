import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() updateValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public incrementCompteur() {
    this.updateValue.emit(1);
  }
  public decrementCompteur() {
    this.updateValue.emit(-1);
  }

}
