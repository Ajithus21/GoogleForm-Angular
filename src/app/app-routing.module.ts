import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'submitted',
		component: NextpageComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
