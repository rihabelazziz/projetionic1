import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{NavController} from '@ionic/angular';
// import{FolderPage} from '../folder/folder.page';
  import { from } from 'rxjs';
@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

//   appareilsList=[
//     {
//     name:'Fond de teint'  
//   },{
//     name:'Poudre'
//   },{name:'Rouge a levre'},
// ];
  
  constructor(public router:Router, public navCont:NavController) { }

  ngOnInit() {
  }
  btnClick()
  {
    // this.router.navigate(['folder']);
    this.navCont.pop();
    
  }

}
