import { ElementRef } from '@angular/core';
import { SmplSelect2Directive } from './smpl-select2.directive';

describe('SmplSelect2Directive', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = {
      nativeElement: {}
    };
    const directive = new SmplSelect2Directive(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
