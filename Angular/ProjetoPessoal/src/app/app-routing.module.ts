import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// Rota Aninhada
const routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: 'usuarios', loadChildren: () => import('./Modulos/usuarios/usuarios.module').then(m => m.UsuariosModule) }
        ]
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}