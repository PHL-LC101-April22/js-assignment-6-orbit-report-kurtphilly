import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-label',
  templateUrl: './list-label.component.html',
  styleUrls: ['./list-label.component.css']
})
export class ListLabelComponent implements OnInit {
@Input() name: string;
@Input() id:  number;
  constructor() { }

  ngOnInit() {
  }

}
