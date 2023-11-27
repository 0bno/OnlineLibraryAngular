import { Component, OnInit } from '@angular/core';
import { MemberService } from './members-list.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})

export class MemberComponent implements OnInit {

  members : any;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getMember().subscribe(
      data => {
        this.members = data.member;
      }
    );
  }
}
