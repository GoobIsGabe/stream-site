import { Component, OnInit } from '@angular/core';
// import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  videos: any[];
  // constructor(private youTubeService: YoutubeService) {}

  ngOnInit(): void {
    // this.videos = [];
    // this.youTubeService
    //   .getVideosForChanel('UCfureA_XfafdyGch4IaEllg', 1)
    //   .pipe()
    //   .subscribe((lista) => {
    //     for (let element of lista['items']) {
    //       this.videos.push(element);
    //       console.log(element);
    //     }
    //   });
  }
}
