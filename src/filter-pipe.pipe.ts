import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(task:string[], SearchText:string ):any[]{
    if(!task) return [];
    if(!SearchText) return task;
  
    SearchText = SearchText.toLowerCase();

   return task.filter((task : string)=> {
     return task.toLowerCase().includes(SearchText)
   })
  }
    
}
