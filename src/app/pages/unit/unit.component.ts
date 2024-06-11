import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/@core/service/api/unit.service';
export interface Iunit {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at : string;
  updated_at : string;
}
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
listData : any;
lastPage: number = 0;
currentPage: number = 0;
apiUrl = 'https://knowledgehub.demopolyct.online/api/unit';
selectedUnit: Iunit | null = null;
  constructor(
    private unit: UnitService
    // private unitService: UnitService
  ) { }

  ngOnInit(): void {
    this.getUnit();
    
  }
  
  getUnit(){
    this.unit.getUnit().subscribe(res => {
      const data = res.data;
      this.currentPage =res.meta.current_page;
      this.lastPage = res.meta.last_page;
      this.listData = data
    }, err =>{
      console.log(err);
      
    })
  }

  getPage(res:any){
    console.log(res);
  }
  
}
