import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/entidades/rol.entity';
import { RolesService } from 'src/servicios/roles/roles.service';
import { UsuariosService } from 'src/servicios/usuarios/usuarios.service';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Rol]),
    ],
    providers: [RolesService]
})
export class RolModule {}
