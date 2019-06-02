import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DataInterface } from './data-interface';
//import { from } from 'rxjs';
/*import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
 
})
export class SearchComponent implements OnInit {
  public items: any[];
  youId: number;
  
  outputId: string= "Enter ID";
  outputLabel: string = "Unknown";
  constructor( private DataService: DataService) { }
  
  count(obj) {
    var i = 0;
    for (var x in this){
      if (!obj.hasOwnProperty(x)){
         i++;
      };
       
    };
    return i;
    
  }

searchTree(element, matchingId){
  let coun = this.count(this.items);
  if(matchingId == undefined){
    this.outputId = "Enter ID";
    this.outputLabel = "Unknown";
  };
  if(matchingId <= ++coun){
    if(element.id == matchingId){
        this.outputId = matchingId;
        this.outputLabel = element.label;
    }else if (element.child != null){
      
         var i; 
         var result = null;
         for(i=0; result == null && i < element.child.length; i++){
              result = this.searchTree(element.child[i], matchingId);
            }
         return result;
    }
  }else if(matchingId >= coun + 1 || matchingId <= 0){
    this.outputId = "Incorrectly entered ID "; 
    this.outputLabel = "Unknown Label ";
  } 
    return null;
  }


  
  ngOnInit() {
    this.DataService.getDate()
      .subscribe(data => this.items = data);
      //console.log(this.items);
  }

}
