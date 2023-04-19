import { Component, OnInit } from '@angular/core';
import { HelloService } from '../core/services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  
  hello_message: any;  

  constructor(private helloService: HelloService) {}
 
  ngOnInit() {
    this.helloService.helloWorld().subscribe(data => {
      (this.hello_message = data.message)
    })
  }

}
