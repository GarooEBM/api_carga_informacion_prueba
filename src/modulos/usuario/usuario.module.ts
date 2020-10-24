import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from 'src/controladores/usuarios/usuarios.controller';
import { Usuario } from 'src/entidades/usuario.entity';
import { UsuariosService } from 'src/servicios/usuarios/usuarios.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [UsuariosController],
    providers: [UsuariosService]
})
export class UsuarioModule {}
