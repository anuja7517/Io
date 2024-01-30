import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
@Input() stdArr ! : Istd []
  constructor() { }

  ngOnInit(): void {
  }

}
