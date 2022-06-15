import { Injectable } from '@angular/core';

@Injectable()
export class ActorsService {
  constructor() {}

  getActors() {
    return [
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
    ];
  }
}
