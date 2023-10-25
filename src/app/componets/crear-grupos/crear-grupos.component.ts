  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { Grupo } from 'src/app/models/grupo';
  import { GruposService } from 'src/app/services/grupos.service';

  @Component({
    selector: 'app-crear-grupos',
    templateUrl: './crear-grupos.component.html',
    styleUrls: ['./crear-grupos.component.css']
  })
  export class CrearGruposComponent {
    grupoForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private _grupoService: GruposService){
      this.grupoForm = this.fb.group({
        nombre : ['', Validators.required]
      });
    }

    ngOnInit(): void {
    }

    agregarGrupo(){
      console.log(this.grupoForm);

      console.log(this.grupoForm.get('grupo')?.value);
      const GRUPO: Grupo = {
        nombre: this.grupoForm.get('nombre')?.value
      }

      console.log(GRUPO);
      this._grupoService.guardarGrupo(GRUPO).subscribe(data =>{
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
        this.grupoForm.reset();
      })
      
    }
    
  }
