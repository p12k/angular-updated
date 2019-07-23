import { User } from './login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']

})
export class LoginComponent implements OnInit{
     
    ngOnInit(): void {
       
    }
     user = new User();

save(userForm:NgForm){
console.log(userForm.form);
console.log('Saved data ' + JSON.stringify(userForm.value) )
 
}

}