import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {
  getMenu(): Observable<NbMenuItem[]> {
    const menu = [
      {
        title: 'Home',
        icon: 'home',
        link: '/pages/cp-home',
        home: true,
        children: undefined,
      },
    ];

    return of([...menu]);
  }
}
