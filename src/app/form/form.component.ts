import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  hasHc: string = '';
  result: string = '';
  consultValues = ['consult', 'medics', 'reeschuduling'];
  secondQuestion = true;
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {}
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: [''],
    scndCtrl: [''],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  thirdFormGroup: FormGroup = this._formBuilder.group({
    isScheduled: [''],
    whyIsHc: [''],
  });

  threatHasHCButton() {
    if (this.secondFormGroup.controls['secondCtrl'].value == false) {
      this.result =
        'Siga a faixa amarela, realize seu cadastro e agendamento e então siga os passos para consulta agendada.';

        this.sendResult(
          {
            patient_name: this.firstFormGroup.controls['firstCtrl'].value,
            responsible_name: this.firstFormGroup.controls['scndCtrl'].value,
            hasHc: this.secondFormGroup.controls['secondCtrl'].value,
            whyIsHc: this.thirdFormGroup.controls['whyIsHc'].value,
            isScheduled: this.thirdFormGroup.controls['isScheduled'].value
          }
        )
    }
  }

  threatNeedTypeButton() {
    if (this.thirdFormGroup.controls['whyIsHc'].value == 'medics') {
      this.result =
        'Dirija-se ao ambulatório, informe seu hc e aguarde o atendimento.';

        this.sendResult(
          {
            patient_name: this.firstFormGroup.controls['firstCtrl'].value,
            responsible_name: this.firstFormGroup.controls['scndCtrl'].value,
            hasHc: this.secondFormGroup.controls['secondCtrl'].value
          }
        )
    } else if (
      this.thirdFormGroup.controls['whyIsHc'].value == 'reeschuduling'
    ) {
      this.result = 'Dirija-se à sala 23 e aguarde o atendimento.';

      this.sendResult(
        {
          patient_name: this.firstFormGroup.controls['firstCtrl'].value,
          responsible_name: this.firstFormGroup.controls['scndCtrl'].value,
          hasHc: this.secondFormGroup.controls['secondCtrl'].value,
          whyIsHc: this.thirdFormGroup.controls['whyIsHc'].value
        }
      )
    }
  }

  isScheduleProces() {
    if (this.thirdFormGroup.controls['isScheduled'].value == 'scheduled') {
      this.result =
        'Dirija-se ao ambulatório infantil, informe sua especialidade e seu hc. Você receberá uma senha, aguarde na sala de TV até ser atendido(a).';
    } else if (this.thirdFormGroup.controls['isScheduled'].value == 'inserted') {
      this.result =
        'Se você recebeu um email confirmando o encaixe: siga a faixa amarela para que sua consulta seja registrada e então siga o processo para consulta agendada.';
    } else if (this.thirdFormGroup.controls['isScheduled'].value == 'none') {
      this.result =
        'Se você não agendou consulta e não recebeu nenhum email confirmando encaixe, dirija-se à sala 23. Aguarde a disponibilidade da consulta e siga os passos para consulta agendada ou retorne outro dia.';
    }

    this.sendResult(
      {
        patient_name: this.firstFormGroup.controls['firstCtrl'].value,
        responsible_name: this.firstFormGroup.controls['scndCtrl'].value,
        hasHc: this.secondFormGroup.controls['secondCtrl'].value,
        whyIsHc: this.thirdFormGroup.controls['whyIsHc'].value,
        isScheduled: this.thirdFormGroup.controls['isScheduled'].value
      }
    )
  }

  sendResult(result: any) {
    this.http.post(
      "https://pacient-api.herokuapp.com", result
    )
  }
}
