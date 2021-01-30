import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  card_text = "Quae excelsiores Dant clariora";
  cards = [
    {text: "Quae excelsiores Dant clariora 1", src : "../../assets/component_2_images/image_1.png"},
    {text: "Quae excelsiores Dant clariora 2", src : "../../assets/component_2_images/image_2.png"},
    {text: "Quae excelsiores Dant clariora 3", src : "../../assets/component_2_images/image_3.png"},
    {text: "Quae excelsiores Dant clariora 4", src : "../../assets/component_2_images/image_4.png"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
