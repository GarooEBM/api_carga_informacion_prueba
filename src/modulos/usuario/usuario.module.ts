import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from 'src/controladores/usuarios/usuarios.controller';
import { Usuario } from 'src/entidades/usuario.entity';
import { UsuariosService } from 'src/servicios/usuarios/usuarios.service';
import { RolModule } from '../rol/rol.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuario]),
        // RolModule
    ],
    controllers: [UsuariosController],
    providers: [UsuariosService]
})
export class UsuarioModule {}
