import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  listColor = ["red","blue","black","green","yellow"];

  mau="";

  constructor() { }

  ngOnInit(): void {
  }

}
