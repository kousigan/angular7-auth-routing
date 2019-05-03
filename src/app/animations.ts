import { animate, animation, style, transition, trigger, query, state } from '@angular/animations';

export const slideAnim =
  trigger('buttonState', [
    state('active', style({
      'margin-left': '100px'
    })),
    state('inactive', style({
      marginLeft: '0px'
    })),
    transition('* => *',animate('500ms ease-in')),

  ]);
