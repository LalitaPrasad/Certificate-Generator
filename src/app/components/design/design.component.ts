import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify.service';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
designs = [
{
	name:"Classis Comgratulation",
	img : "../../../assets/classic2.png"
},
{
	name:"Silver Success",
	img:"../../../assets/Silver.jpg"
},
{
	name:"Designer Reward",
	img:"../../../assets/designer2.png"
}
];
  constructor(private router: Router,private notifyService : NotifyService) { }

  ngOnInit() {
  }

  templateSelected(template:string)
  {
  	console.log("tetfet");
  	this.notifyService.emitTemplate(template);
  	// this.router.navigate(['/edit-template']);
  }

}
