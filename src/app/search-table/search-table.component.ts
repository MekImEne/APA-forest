import { AfterViewInit, Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { RessforService } from '../ressfor.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements  OnInit {
  ressources: any=[];
  dtOptions: DataTables.Settings = {};
  constructor( private router: Router, private ress: RessforService) { }

  someClickHandler(info: any): void {
    this.router.navigate(["AllRessourcesFor/" + info.id]);
  }

  ngOnInit(): void {
      
    this.dtOptions = {
      ajax: {
    "url": "http://localhost:8080/RessourcesForestieres",
    "type": "GET",
     dataSrc: ""
  },
      columns: [ {
        title: 'Nom commun',
        data: 'nom_commun'
      }, {
        title: 'Nom scientifique',
        data: 'nom_scientifique'
      }, {
        title: 'Categorie',
        data: 'category'
      }, 
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
         
        });
        return row;
      }
    };
  }

  

}
