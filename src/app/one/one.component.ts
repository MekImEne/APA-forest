import { Component, OnInit } from '@angular/core';
import { RessforService } from '../ressfor.service';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  ressource: any;
  constructor(private ress: RessforService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.ressource = params.id);
  }

  ngOnInit() {
    this.ress.getone(this.ressource).subscribe(
      data => this.ressource = data
    );
}

}
