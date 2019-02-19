import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetContactService } from './get-contact.service';


describe('GetContactService', () => {
  let getContactService: GetContactService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ],
      providers: [
        GetContactService
        ]
    });
    getContactService = TestBed.get(GetContactService);
    httpMock = TestBed.get(HttpTestingController);

  });
  it('should be created', inject([GetContactService], (service: GetContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to make an API call', function() {

  });

  // let contactRequest = httpMock.expectOne('../../../assets/contactMock.json');

  it('should be able to return a contact', function () {

  });


});
