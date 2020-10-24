import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('usuarios')
export class UsuariosController {

    // Obtener todos los usuarios
    @Get()
    async obtenerUsuarios(){
        return `Todos los usuarios`;
    }

    // Obtener la información de un usuario especifico
    @Get()
    async infoUsuario() {
        return `Informacion de un usuario`;
    }

    // Insertar usuarios
    @Post()
    @UseInterceptors(FilesInterceptor('file'))
    async crearUsuario(@UploadedFiles() file) {
        console.log(file);
        return `Crear usuarios`
    }
}
