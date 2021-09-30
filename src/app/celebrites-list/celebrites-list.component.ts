import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../services/server-http.service';
import { Celebrities } from '../defined/celebrities';

@Component({
  selector: 'app-celebrites-list',
  templateUrl: './celebrites-list.component.html',
  styleUrls: ['./celebrites-list.component.css']
})
export class CelebritesListComponent implements OnInit {
  public celebrities_list: string = '';
  constructor(private serverHttp: ServerHttpService) { }
  public items: Celebrities[] = [];
  ngOnInit(): void {
    this.serverHttp.getCelebrities().subscribe(data => {
      this.items = data;
      // console.log(this.items);
      // for (let celebrity of data) {
      //   this.celebrities_list += `
      //   <div class="col-4">
      //               <img src="`+ celebrity.images + `" class="img-fluid rounded-sm mb-3">
      //               <!-- <p class="mb-n1 color-highlight font-600">Column</p> -->
      //               <h2>`+ celebrity.name + `</h2>
      //               <p>Location : `+ celebrity.location + `<br>Date of birth: ` + celebrity.dob + `<br>` + celebrity.info + `</p>
      //               <a href="index-components.html"
      //                   class="btn btn-sm rounded-s font-13 font-600 gradient-highlight">View More</a>
      //           </div>
      //   `;
      // }
      // console.log(this.celebrities_list)
    });
  }
}
