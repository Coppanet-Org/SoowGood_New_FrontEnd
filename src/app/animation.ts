import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export function slideInFrom(direction: 'left' | 'right'): AnimationTriggerMetadata {
  return trigger('slideInFrom', [
    state('void', style({ transform: `translateX(${direction === 'left' ? -100 : 100}%)` })),
    state('*', style({ transform: 'translateX(0)' })),
    transition('void => *', animate('400ms cubic-bezier(0.35, 0, 0.25, 1)')),
  ]);
}
