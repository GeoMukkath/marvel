import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-stories',
  templateUrl: './featured-stories.component.html',
  styleUrls: ['./featured-stories.component.css']
})
export class FeaturedStoriesComponent implements OnInit {
  reviews = [
    {src : "../../assets/component_3_images/review1.png", review : "At iam decimum annum in spelunca iacet 1 .", date: "19 May 2020" },
    {src : "../../assets/component_3_images/review2.png", review : "At iam decimum annum in spelunca iacet 2 .", date: "20 May 2020" },
    {src : "../../assets/component_3_images/review3.png", review : "At iam decimum annum in spelunca iacet 3 .", date: "21 May 2020" },
    {src : "../../assets/component_3_images/review4.png", review : "At iam decimum annum in spelunca iacet 4 .", date: "22 May 2020" },
    {src : "../../assets/component_3_images/review3.png", review : "At iam decimum annum in spelunca iacet 4 .", date: "22 May 2020" },
    {src : "../../assets/component_3_images/review2.png", review : "At iam decimum annum in spelunca iacet 4 .", date: "22 May 2020" },
    {src : "../../assets/component_3_images/review1.png", review : "At iam decimum annum in spelunca iacet 4 .", date: "22 May 2020" }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
