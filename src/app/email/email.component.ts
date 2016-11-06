import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class EmailComponent implements OnInit {
  @Input('height') screenHeight: number = 100;
  @Input('width') screenWidth: number = 90;
  @Input('distance') screenDistance: number = 50;
  @Input('blur') screenBlur: number = 1;
  @Input('x') distanceX: number = 50;
  @Input('y') distanceY: number = 50;
  @Input('rotY') screenRotationY: number = 0;
  @Input('rotX') screenRotationX: number = 0;

  constructor() { }


  ngOnInit() {
  }
  onAddDistance(){
    this.screenDistance = this.screenDistance + 10;
  }
  onSubDistance(){
    this.screenDistance = this.screenDistance - 10;
  }
  onAddRotation(){
    this.screenRotationY = this.screenRotationY + 10;
  }
  onSubRotation(){
    this.screenRotationY = this.screenRotationY - 10;
  }
 onMouseEnter() {
   this.screenBlur = 0;
 }
 onMouseLeave() {
   this.screenBlur = 1;
 }

}
