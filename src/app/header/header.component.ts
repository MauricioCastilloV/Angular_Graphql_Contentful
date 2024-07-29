import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_HEADER } from '../graphql/getHeader.operation';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';  // Importa CommonModule


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  data: any[] = [];
  error: any;
  blogPosts$: Observable<any> | undefined

  constructor(private apollo: Apollo){};

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_HEADER,
      // variables: {
      //   locale: 'en-US',
      //   preview: false,
      //   limit: 10
      // }
    }).valueChanges.subscribe(({data, error}: any)=> {
      this.data = data.headerCollection.items[0]
      this.error = error;
      // this.blogPosts$ = data;
      console.log(this.data);
    })
  }

}
