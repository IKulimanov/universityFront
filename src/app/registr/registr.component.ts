import {Component, Inject, Injectable, OnInit} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})

export class RegistrComponent implements OnInit {

  public reqIsUserLogin: string;
  /**
   * Имя пользователя
   */
  public login: string;
  /**
   * Пароль
   */
  public password: string;
  /**
   * Имя
   */
  public firstname: string;
  /**
   * Почта
   */
  public email: string;
  /**
   * Фамилия
   */
  public lastname: string;
  /**
   * Возраст
   */
  public age: string;
  /**
   * Номер телефона
   */
  public telephone: string;
  /**
   * Уведомления о новых собаках
   */
  public ntfdog: string;
  /**
   * Уведомления о новых кошках
   */
  public ntfcat: string;
  /**
   * Уведомления о новых птицах
   */
  public ntfbird: string;
  /**
   * Уведомления о новых грызунах
   */
  public ntfgriz: string;
  /**
   * Заявка на волонтерство
   */
  public isvolon: string;
  constructor(private restService: RestService ) {
  }

  /*
    searchUser(): any{
      const params = {
        login: this.login,
        password: this.password,
        email: this.email};*/

  /*this.restService.doCall('doSearchLogin', params)
    .subscribe((res: any) => {
      this.reqIsUserLogin = res;
      console.log(res);
    });
}
*/

  ngOnInit(): void {
  }

  public doReg(): any {
    console.log('login: ' + this.login);
    console.log('password: ' + this.password);
    console.log('emal: ' + this.email);
    console.log('firstname: ' + this.firstname);
    console.log('lastname: ' + this.lastname);
    console.log('age: ' + this.age);
    console.log('telephone: ' + this.telephone);
    console.log('ntf_dog: ' + this.ntfdog);
    console.log('ntf_cat: ' + this.ntfcat);
    console.log('ntf_bird: ' + this.ntfbird);
    console.log('ntf_griz: ' + this.ntfgriz);
    console.log('is_volon: ' + this.isvolon);
    const params = {
      login: this.login,
      password: this.password,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      telephone: this.telephone,
      ntf_dog: this.ntfdog,
      ntf_cat: this.ntfcat,
      ntf_bird: this.ntfbird,
      ntf_griz: this.ntfgriz,
      reqvol: this.isvolon

    };
    this.restService.doCall('doAccauntReg', params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}

