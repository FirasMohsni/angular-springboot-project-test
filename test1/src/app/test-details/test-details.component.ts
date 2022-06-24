import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  id: number
  test: Test

  constructor(private route: ActivatedRoute, private testService: TestService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.test = new Test();
    this.testService.getTestbyId(this.id).subscribe(data =>{
      this.test = data;
    })
  }

}
