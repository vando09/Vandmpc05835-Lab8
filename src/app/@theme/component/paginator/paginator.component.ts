import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() dataList: EventEmitter<any> = new EventEmitter();
  @Input() apiUrl!:string;
  @Input() current_page!:number;
  @Input() last_page!:number;
  indexPage: number = 1;
  hasPreviousPage: boolean = true;
  hasNextPage: boolean = false;
  // apiUrl ='https://knowledgehub.demopolyct.online/api/unit'
  constructor(
    private http: HttpClient,
  ) {
    
   }

  ngOnInit(): void {
  }
  getData(){
    this.getPaginator().subscribe((res)=>{
      this.dataList.emit(res);
    })
  }
  goFirstPage(){
    this.indexPage = 1;
    this.hasPreviousPage=true;
    this.hasNextPage=false;
    this.getData();
  }
  goLastPage(){
    this.indexPage = this.last_page;
    this.hasPreviousPage=false;
    this.hasNextPage=true;
    this.getData();
  }

  getPaginator():Observable<any>{
    return this.http.get(`${this.apiUrl}?page${this.indexPage}`);
  }
}
