import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  imageList = [
    {src : "../../assets/component_8_images/image1.png"},
    {src : "../../assets/component_8_images/image2.png"},
    {src : "../../assets/component_8_images/image3.png"},
    {src : "../../assets/component_8_images/image4.png"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
