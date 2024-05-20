import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
  receivedData: string = '';


  // constructor(private router: Router) {
  //   const navigation = this.router.getCurrentNavigation();
  //   console.log('Navigation:', navigation);
  //   if (navigation && navigation.extras && navigation.extras.state) {
  //     console.log('State:', navigation.extras.state);
  //     this.receivedData = navigation.extras.state['data'];
  //   }
  // }

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.receivedData = params['data'];
      console.log("Data received in App2:", this.receivedData);
    });
  }

  navigateBackToApp1() {
    this.router.navigateByUrl('/app1');
  }

  
}
