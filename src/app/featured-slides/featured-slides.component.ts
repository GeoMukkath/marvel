import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-slides',
  templateUrl: './featured-slides.component.html',
  styleUrls: ['./featured-slides.component.css']
})
export class FeaturedSlidesComponent implements OnInit {
  images = [
      { src : "../../assets/component_5_images/image1.png"},
      {src  : "../../assets/component_5_images/image3.png"},
      {src  : "../../assets/component_5_images/image1.png"},
      {src  : "../../assets/component_5_images/image3.png"},
      {src  : "../../assets/component_5_images/image1.png"}

  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
