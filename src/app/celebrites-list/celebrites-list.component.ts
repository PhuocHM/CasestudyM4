import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../services/server-http.service';

@Component({
  selector: 'app-celebrites-list',
  templateUrl: './celebrites-list.component.html',
  styleUrls: ['./celebrites-list.component.css']
})
export class CelebritesListComponent implements OnInit {

  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.serverHttp.getCelebrities().subscribe((data) => {
      console.log(data);
    });
  }
}
