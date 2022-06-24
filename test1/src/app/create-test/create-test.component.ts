import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  test: Test = new Test();

  constructor(private testService: TestService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveTest(){
    this.testService.createTest(this.test).subscribe(data =>{
      console.log(data);
      this.goToList();
    },
    error => console.log(error));
    
  }
  goToList(){
    this.router.navigate(['/tests']);

  }
  onSubmit(){
    console.log(this.test);
    this.saveTest();
  }

}
