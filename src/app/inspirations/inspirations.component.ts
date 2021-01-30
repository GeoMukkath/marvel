import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.css']
})
export class InspirationsComponent implements OnInit {
  masonryItems = [
    {src: "../../assets/component_7_images/image1.png"},
    {src: "../../assets/component_7_images/image2.png"},
    {src: "../../assets/component_7_images/image3.png"},
    {src: "../../assets/component_7_images/image4.png"},
    {src: "../../assets/component_7_images/image5.png"},
    {src: "../../assets/component_7_images/image6.png"},
    {src: "../../assets/component_7_images/image7.png"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
