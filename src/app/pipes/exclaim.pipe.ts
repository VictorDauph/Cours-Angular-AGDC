import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclaim',
  pure: false
})
export class ExclaimPipe implements PipeTransform {

  transform(value: string, count: number = 1): string {
    return value + '!'.repeat(count);
  }

}
