
import { Component , Input } from '@angular/core'
@Component({
    selector: 'my-log',
    templateUrl: './home.component.html',
   styleUrls:['./home.component.css'],
    
  //providers:[LoginService]
})
export class HomeComponent{

 lat:any;
 lng:any;

//  title: string = 'My first AGM project';
//  lat: number = 51.678418;
//  lng: number = 7.809007;
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
 