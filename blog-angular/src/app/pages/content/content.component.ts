import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imageNews: string = '';
  titleNews: string = '';
  contentNews: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
