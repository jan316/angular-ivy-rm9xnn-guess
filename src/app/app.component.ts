import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arr: Array<number> = [0,0,0];
  count: number = 0;
  score: number = 0;
  a: number = 0;
  b: number = 0;
  c: number = 0;


  actors = [
    {
      name: 'David Matásek',
      photo:
        'https://m.media-amazon.com/images/M/MV5BZDFmMjhkYWUtMzllOS00YTlkLTg2OWItMTNiYzVjNzg2YmFjXkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_FMjpg_UX800_.jpg',
    },
    {
      name: 'David Švehlík',
      photo:
        'https://img.cncenter.cz/foto/serialy-souboj-kapitan-exner-nova-prima-ct/Zml0LWluLzk3OHg5OTk5L2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/3626324.jpg?v=0&st=YSzXP15nEGp4Vw-yxQW7AsgcTnE7THP8oaLBQHjImlw&ts=1600812000&e=0',
    },
    {
      name: 'Hynek Čermák',
      photo:
        'https://img.cncenter.cz/foto/hynek-cermak/Zml0LWluLzk3OHg5OTk5L2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/6247228.jpg?v=0&st=uYIQTOFsu3gJW7xn6Aq__MSw5_0QyXYxulYZWj3-va0&ts=1600812000&e=0',
    },
    {
      name: 'Jiří Dvořák',
      photo:
        'https://img.cncenter.cz/foto/jiri-dvorak-narusitel/Zml0LWluLzk3OHg5OTk5L2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/6247229.jpg?v=0&st=Yjlmb-RjcaGOnwmbN7bDQA3f6u4iTDBeTPb-c739wco&ts=1600812000&e=0',
    },
    {
      name: 'Jiří Langmajer',
      photo:
        'https://img.cncenter.cz/foto/jiri-langmajer/Zml0LWluLzk3OHg5OTk5L2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/5893416.jpg?v=0&st=Waa3SDoupMlmbVLdH_1zVzd7HHwwYtci7bPuVOPIlcE&ts=1600812000&e=0',
    },
    {
      name: 'Karel Dobrý',
      photo:
        'https://img.cncenter.cz/foto/karel-dobry/Zml0LWluLzk3OHg5OTk5L2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/6247294.jpg?v=0&st=vkJDT6g4_hDdFAKOSSCGXd0GHNZfEAPMIhJGOTwLZfM&ts=1600812000&e=0',
    },
    {
      name: 'Lukáš Vaculík',
      photo:
        'https://m.media-amazon.com/images/M/MV5BOTMzOGU5MzctZjNlZS00MGIwLTk2ZTMtOTNjNzRlNTlhNWE2XkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_FMjpg_UX1280_.jpg',
    },
    {
      name: 'Michal Dlouhý',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMjFmMGQ5NjgtYTlmOS00NjM3LTk2MmEtMTE5NGMwZjVkNjVhXkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_FMjpg_UX980_.jpg',
    },
    {
      name: 'Saša Rašilov',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMjhmMTA4MTMtOTY4ZC00N2QwLTk5YjAtYTQ5MmNhN2EzM2Y0XkEyXkFqcGdeQXVyMjIxMzMyMQ@@._V1_FMjpg_UX720_.jpg',
    },
    {
      name: 'Stanislav Majer',
      photo:
        'https://img.cncenter.cz/foto/serial-pripad-pro-exorcistu-stanislav-majer/MHgwL3NtYXJ0L3RoYg/1-full-2283956.jpg?v=6&st=JgGZ2mkLncTcCB97bLCwK8GTzDQTBAl90HSTHFWMgjo&ts=1600812000&e=0',
    },
  ];

  onGoClick() {
    let arr = [];
    while (arr.length < 3)
    {
      let r = Math.floor(Math.random() * this.actors.length - 1) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }


    this.a = arr[0];
    this.b = arr[1];
    this.c = arr[2];

    console.log(this.a, this.b, this.c);

    let ul: any = document.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
    }

    this.count = this.count+1;
    console.log(this.count);




  }

  onRestartClick() {
    window.location.reload()
  }

}
