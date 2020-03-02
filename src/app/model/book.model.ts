import { Injectable } from '@angular/core';

@Injectable()
export class Book {


constructor(public id?: number, public title?: string,public author?: string, public price?: number, public noInStock?: number, public stopOrder?: number, public reorderingThreshold?: number){}
}
