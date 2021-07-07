import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../Model/Service/usuarios.service';
import { Usuarios } from '../../Model/usuarios.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioFormComponent implements OnInit {

  public form: FormGroup 
  colorControle = new FormControl('warn');

  // O construtor é usado para injeção de dados
  // Obs: injetar dados como params
  constructor( 
    private _service: UsuariosService, 
    private _fb: FormBuilder, 
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public name: {name: string}
    ) { }

  ngOnInit(): void {
    // New Usuarios está criando um formulário da nossa classe Usuários
    this.form = this._fb.group(new Usuarios);

  }

  // o método "addUser()" para popular o banco.
  public addData() {
    return this._service.addUser(this.form.value);
  }

}
