import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CrearUsuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from 'src/servicios/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(
        private readonly usuariosService: UsuariosService
    ) {}

    // Obtener todos los usuarios
    @Get()
    async obtenerUsuarios(){
        return await this.usuariosService.getAll();
    }

    // Obtener la información de un usuario especifico
    @Get(':id')
    async infoUsuario(@Param('id', ParseIntPipe) id:number) {
        const data = await this.usuariosService.getById(id)

        return {data};
    }

    // Insertar usuarios
    // @Post()
    // Uso de Interceptor para lectura del archivo
    // @UseInterceptors(FilesInterceptor('file'))
    // async crearUsuario(@UploadedFiles() file) {
    //     console.log(file);
    //     return `Crear usuarios`
    // }

    @Post()
    async crearUsuario(@Body() dto: CrearUsuarioDto) {
        return this.usuariosService.crearUsuario(dto);
    }
}
