import { TestBed, inject } from '@angular/core/testing';
import { PhoneNumberService } from './phone-number.service';
const phoneNumber = `6033692893`;
describe('PhoneNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneNumberService]
    });
  });

  it('should be created', inject([PhoneNumberService], (service: PhoneNumberService) => {
    expect(service).toBeTruthy();
  }));
  it('should be able to format a number to (xxx) xxx-xxxx', function() {
    expect(phoneNumber).toBe(`(603) 369-2893`);
  });
  it('should be able to format a number to xxx-xxx-xxxx', function() {
    expect(phoneNumber).toBe(`603-369-893`);
  });
});
