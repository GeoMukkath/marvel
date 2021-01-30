import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images = [
    {src: "../../assets/component_1_images/image8.png"},
    {src: "../../assets/component_1_images/image7.png"},
    {src: "../../assets/component_1_images/image6.png"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
