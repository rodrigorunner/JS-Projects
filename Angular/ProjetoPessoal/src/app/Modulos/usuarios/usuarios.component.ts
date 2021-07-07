import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from './Model/Service/usuarios.service';
import { Usuarios } from './Model/usuarios.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuarioFormComponent } from './Form/usuario-form/usuario-form.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public displayedColumns: string[] = ['nome', 'senha', 'telefone'];
  public dataSource: MatTableDataSource<Usuarios> = new MatTableDataSource();

  public name: string

  public form: FormGroup 
  colorControle = new FormControl('warn');

  // O construtor é usado para injeção de dados
  // Obs: injetar dados como params
  constructor(private _service: UsuariosService, private _fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    // New Usuarios está criando um formulário da nossa classe Usuários
    this.form = this._fb.group(new Usuarios);
    this.getData();

  }

   // Func usa o serviço de "UsuariosService" e acessa
  // o método "fetchData()" para renderizar na tela.
  public getData() {
    return this._service.fetchData().subscribe(res => this.dataSource.data = res);
  }

  // Func usa o serviço de "UsuariosService" e acessa
  // o método "addUser()" para popular o banco.
  public addData() {
    return this._service.addUser(this.form.value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      width: '550px',
      data: {name: this.name}
    });

    dialogRef.beforeClosed().subscribe((res => console.log(res)))
  }

  applyFilter(event: Event) {
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
