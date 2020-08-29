import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  constructor(private route:Router) { }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {}
  d(){
    this.route.navigateByUrl('home');
  }

}
