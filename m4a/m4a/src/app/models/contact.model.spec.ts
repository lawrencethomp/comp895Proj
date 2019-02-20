import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Contact} from './contact';
import {contactOne} from './contactGraph';

describe('Testing the Contact Model', () => {
    let model: Contact;
    beforeEach(async()=> {
        model = new Contact(
            'Lawrence',
            'Thompson',
            '86 Liberty Street',
            'lawrencethomp@gmail.com',
            '6033692893',
            'He',
            'cool',
            '43.00885590000001, -71.44774689999997'
        );
    });
    it('Should be able to get First Name', function() {});
    it('Should be able to set First Name', function() {});
    it('Should be able to get Last Name', function() {});
    it('Should be able to set Last Name', function() {});
    it('Should be able to get Address', function() {});
    it('Should be able to set Address', function() {});
    it('Should be able to get email', function() {});
    it('Should be able to set email', function() {});
    it('Should be able to get phone number', function() {});
    it('Should be able to set phone number', function() {});
    it('Should be able to get someones pronoun', function() {});
    it('Should be able to set someones pronoun', function() {});
    it('Should be able to get notes about someone', function() {});
    it('Should be able to set notes about someone', function() {});
    it('Should be able to get Latitude', function() {});
    it('Should be able to set Latitude', function() {});
    it('Should be able to get Longitude', function() {});
    it('Should be able to set Longitude', function() {});
});
