
import { Component , Input } from '@angular/core'
import * as $ from 'jquery/dist/jquery.min.js';
@Component({
    selector: 'my-log',
    templateUrl: './home.component.html',
   styleUrls:['./home.component.css'],
    
  //providers:[LoginService]
})
export class HomeComponent {
 
 lat:any;
 lng:any;


constructor(){

  navigator.geolocation.getCurrentPosition((position) => { 
    console.log("Got position", position.coords);
    this.lat = position.coords.latitude; 
    this.lng = position.coords.longitude;
    console.log(this.lat +" "+this.lng)
    console.log(this.lat);
    console.log(this.lng);
   
  });

  
}

getdate(){
  var displayDate = new Date().toLocaleDateString();
}

// getLocation() {
//   navigator.geolocation.getCurrentPosition((position) => { 
//     console.log("Got position", position.coords);
//     this.lat = position.coords.latitude; 
//     this.lng = position.coords.longitude;
//     console.log(this.lat +" "+this.lng)

   
//   });
// }

}
 