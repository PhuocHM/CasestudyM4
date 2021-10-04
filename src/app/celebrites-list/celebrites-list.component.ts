import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../services/server-http.service';
import { Celebrities } from '../defined/celebrities';

@Component({
  selector: 'app-celebrites-list',
  templateUrl: './celebrites-list.component.html',
  styleUrls: ['./celebrites-list.component.css']
})
export class CelebritesListComponent implements OnInit {
  constructor(private serverHttp: ServerHttpService) { }
  public items: Celebrities[] = [];
  ngOnInit(): void {
    this.serverHttp.getCelebrities().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }
}
