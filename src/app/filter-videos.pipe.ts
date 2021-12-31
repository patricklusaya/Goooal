import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVideos'
})
export class FilterVideosPipe implements PipeTransform {
  transform(videos: any[], title: string): any {
    return videos.filter(video => video.title === title);
  }
}
