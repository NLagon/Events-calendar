import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'convertToLowerCase'
})
export class  LowerCaseSession implements PipeTransform {

  transform(value: any, characters : any) {
      return value.replace(characters,"D");
  }




}
