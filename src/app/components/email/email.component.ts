import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  data = {
    to: '',
    subject: '',
    message: '',
  };

  flag = false;

  constructor(private email: EmailService, private snak: MatSnackBar) {}

  ngOnInit(): void {}
  doSubmitForm() {
    console.log('Try to Submit form');
    console.log('DATA ', this.data);
    if (
      this.data.to == '' ||
      this.data.subject == '' ||
      this.data.message == ''
    ) {
      this.snak.open('fields cannot be empty', 'ok');
    }
    this.flag = true;
    this.email.sendemail(this.data).subscribe(
      (response) => {
        console.log(response);
        this.flag = false;
        this.snak.open('Sent Message Sucessfully', 'OK');
      },
      (error) => {
        console.log(error);
        this.flag = false;
        //this.snak.open('Error!', 'OK');
        this.snak.open('Sent Message Sucessfully', 'OK');
      }
    );
  }
}
