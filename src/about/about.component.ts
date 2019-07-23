import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public searchText : string;
  public aboutData : any;

  constructor() { }

  ngOnInit() {
    this.aboutData = [
      {"trainnumber":22206 , "trainname": 'MADURAI- CHEENAI CENTRAL AC DURONTO EXPRESS', "rundays":'TUE,THU',"departuretiming": 22 ,"arrivaltiming": 8},
      {"trainnumber":12019 , "trainname": 'HOWRAH-RANCHI SHATABDI EXPRESS', "rundays":'M,T,W,T,F,S',"departuretiming": 22 ,"arrivaltiming": 8},
      {"trainnumber":12430 , "trainname": 'NEW DELHI-LUCKNOW AC SF  EXPRESS', "rundays":'M,TUE,F,S',"departuretiming": 22 ,"arrivaltiming": 8},
      {"trainnumber":12864, "trainname": 'YESVANTPUR -HOWRAH SF EXPRESS', "rundays":'M,TUE, W,T,F,S,S',"departuretiming": 22 ,"arrivaltiming": 8},
    
    ];
  }
}

