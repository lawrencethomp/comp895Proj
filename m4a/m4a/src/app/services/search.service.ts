import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Rx} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import { Output } from '@angular/core';
@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  @Output() getSearchResults: EventEmitter<boolean> = new EventEmitter();
}
