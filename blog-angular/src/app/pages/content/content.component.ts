import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/components/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string = '';

  imageNews: string = '';
  titleNews: string = '';
  contentNews: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
        this.id = id;

        this.setValuesToComponent(this.id);
    }


  }

  setValuesToComponent(id: string) {
      const result  = dataFake.filter(article => article.id == id)[0];

      this.imageNews = result.image;
      this.titleNews = result.title;
      this.contentNews = result.content;

  }

}
