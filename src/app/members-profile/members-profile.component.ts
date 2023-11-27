import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../members-list/members-list.service';

@Component({
  selector: 'app-members-profile',
  templateUrl: './members-profile.component.html',
  styleUrls: ['./members-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  member: any;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  //On récupère dans le json les données des membres pour les utiliser dans la page profil
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const prenom = params.get('prenom');
      this.memberService.getMember().subscribe(data => {
        this.member = data.member.find((m: { prenom: string | null; }) => m.prenom === prenom);
      });
    });
  }
}
