import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  private page = 'home';

  constructor(private pageService: PageService) {

    this.pageService.DataPassMethod(this.page);
  }

  ngOnInit() {


  }

  setPage(value) {

    this.pageService.DataPassMethod(value);

  }

}
