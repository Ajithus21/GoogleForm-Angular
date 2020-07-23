import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private httpclient: HttpClient) {}

	postData(data): Observable<any> {
		return this.httpclient.post('http://localhost:3000/', data);
	}
}
