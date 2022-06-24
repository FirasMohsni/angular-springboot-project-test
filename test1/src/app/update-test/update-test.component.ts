import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {
  id: number;
  test: Test = new Test();

  constructor(private testService: TestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.testService.getTestbyId(this.id).subscribe(data =>{
      this.test = data;
    },
    error => console.log(error)
    
    );
  }
  onSubmit(){
    this.testService.updateTest(this.id , this.test).subscribe( data =>{
      this.goToList();

    },
    error => console.log(error)
    
    )
  }
  goToList(){
    this.router.navigate(['/tests']);

  }

}
