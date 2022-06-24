import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../test'
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  tests: Test[] ;
  constructor(private testService: TestService,
    private router: Router) { }

  ngOnInit(): void {
   this.getTests();

  }
 
  private getTests(){
    this.testService.getTestsList().subscribe(data => {
      this.tests = data;
    });
  }
  testDetails(id: number){

    this.router.navigate(['details',id]);


  }

  updateTest(id:number){
    this.router.navigate(['update',id]);

  }

  deleteTest(id: number){
    this.testService.deleteTest(id).subscribe( data => {
      console.log(data);
      this.getTests();
    })

  }

}
