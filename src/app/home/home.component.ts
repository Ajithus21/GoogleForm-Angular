import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	userForm;
	constructor(private dataservice: DataService, private router: Router) {
		this.userForm = new FormGroup({
			username: new FormControl('', Validators.required),
			email: new FormControl('', Validators.required),
			phone: new FormControl('', Validators.required),
			age: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {}

	sendData() {
		if (this.userForm.valid) {
			this.dataservice.postData(this.userForm.value).subscribe(() => {});

			this.router.navigate([ 'submitted' ]);
		}
	}
}
