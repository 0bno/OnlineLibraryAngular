import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  closeResult: string | any;
  contactForm: FormGroup | any;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.createForm(); //CRéation du formulaire
  }

  //Création du formulaire et assignation des variables pour chaque zone de texte
  createForm() {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(content: any) {
    console.log(this.contactForm.value);
    this.open(content); // Ouvre la pop-up en passant le contenu du formulaire à afficher
  }

  // Ouvre la pop-up avec le contenu spécifié
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`; //Observe comment la fenêtre est fermée
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`; //Analyse comment la pop-up est fermée
      }
    ).finally(() => {
      // Réinitialise le formulaire de contact après la fermeture de la pop-up
      this.contactForm.reset();
    });
  }

  // Retourne une chaîne de caractères décrivant la raison de la fermeture ou du rejet de la pop-up
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
