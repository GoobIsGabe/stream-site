import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/models/community';
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
})
export class OthersComponent implements OnInit {
  constructor() {}

  People: Community[] = [
    new Community(
      /*User*/ 'AlexandriteStudio',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/8abe84b2-a305-4d7c-9b7c-7dce3456ca38-profile_image-300x300.png',
      /*Twitch*/ 'alexandritestudio',
      /*Twitter*/ 'alexandritestud',
      /*Youtube*/ null,
      /*Instagram*/ 'alexandrite.studio',
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'BKXO',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/ef23304a-8172-4620-a2d8-7ceb56988111-profile_image-300x300.png',
      /*Twitch*/ 'BKXO',
      /*Twitter*/ null,
      /*Youtube*/ null,
      /*Instagram*/ null,
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'D0yle',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/a47d3052-91b5-4f85-855f-14fe1eb9d508-profile_image-300x300.png',
      /*Twitch*/ 'd0yle',
      /*Twitter*/ 'thed0yle',
      /*Youtube*/ 'D0yle',
      /*Instagram*/ 'oliverhdoyle',
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'Mattyrey',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/54171225-1535-463f-91ac-a7907c8ec315-profile_image-300x300.png',
      /*Twitch*/ 'mattyrey',
      /*Twitter*/ 'mattyreyrey',
      /*Youtube*/ 'mattyreyrey',
      /*Instagram*/ null,
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'MissteryHero',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/225c29be-576b-4b90-9669-f0b5c7b5ca29-profile_image-300x300.png',
      /*Twitch*/ 'missteryhero',
      /*Twitter*/ 'MissteryHero',
      /*Youtube*/ null,
      /*Instagram*/ null,
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'Sünta',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/a9d39bb2-f80a-41f4-acc2-3c8dadc1a84e-profile_image-300x300.png',
      /*Twitch*/ 'sunta_foot',
      /*Twitter*/ 'sunta_foot',
      /*Youtube*/ null,
      /*Instagram*/ null,
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
    new Community(
      /*User*/ 'Toky',
      /*Image*/ 'https://static-cdn.jtvnw.net/jtv_user_pictures/5455dd7f-b8f5-4db4-8386-5ff81ef769eb-profile_image-300x300.png',
      /*Twitch*/ 'toky',
      /*Twitter*/ 'ToKymonGrey',
      /*Youtube*/ null,
      /*Instagram*/ 'tokymongrey',
      /*Description*/ 'Description goes here for describing what or who this card is about.'
    ),
  ];

  ngOnInit(): void {
    const randomNum = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

    document.documentElement.style.setProperty('--main-bg-color', randomNum);
  }
}
