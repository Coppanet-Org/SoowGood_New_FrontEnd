import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export function slideInFrom(direction: 'left' | 'right'): AnimationTriggerMetadata {
  return trigger('slideInFrom', [
    state('void', style({ transform: `translateX(${direction === 'left' ? -100 : 100}%)` })),
    state('*', style({ transform: 'translateX(0)' })),
    transition('void => *', animate('400ms cubic-bezier(0.35, 0, 0.25, 1)')),
  ]);
}

export function singleSlide(direction: 'top' | 'bottom'): AnimationTriggerMetadata {
  return trigger('singleSlide', [ // Changed trigger name to 'singleSlide'
    state('void', style({ transform: `translateY(${direction === 'top' ? -100 : 100}%)` })),
    state('*', style({ transform: 'translateY(0)' })),
    transition('void => *', animate('400ms cubic-bezier(0.35, 0, 0.25, 1)')),
  ]);
}
