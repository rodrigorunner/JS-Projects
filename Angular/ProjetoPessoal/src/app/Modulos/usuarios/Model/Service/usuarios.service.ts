import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuarios } from '../usuarios.model';
import { map } from 'rxjs/operators'
 
// Injeção de dependência são serviços ou objetos 
// que uma classe usa para realizar sua função
@Injectable()

// Injeção de dependência é um design onde uma classe
// usa recursos externos ao invés de criá-las


export class UsuariosService {
    // Injetamos dados por parms no "construtor();"
    constructor(private firestore: AngularFirestore) {    }
    
    // Função responsável por buscar dados no db
    // "Observable<Usuarios[]>" - é como "EventListener", fica escutando
    // por mudanças o tempo todo e em relação ao ciclo de vidad de um
    // componente, Observable é usado no método "onDestroy()"
    public fetchData(): Observable<Usuarios[]> {
        // "snapshotChanges" atualiza em tempo real
        // "collection('usuarios')" é o nome do meu documento(tabela)
        return this.firestore.collection('usuarios').snapshotChanges().pipe(
            map((usuario: any) => {
                return [];
            })
        )
    } 

    // Função responsável por popular o db
    // Promise<void>, void é um valor que não retorna nada
    // e Promise torna a função assíncrona 
    public addUser(obj: Usuarios): Promise<void> {
       return this.firestore.collection('usuarios').doc().set(obj)
    }

}