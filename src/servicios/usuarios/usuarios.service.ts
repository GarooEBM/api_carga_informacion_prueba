import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entidades/usuario.entity';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { CrearUsuarioDto } from 'src/dtos/usuario.dto';
import { RolModule } from 'src/modulos/rol/rol.module';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class UsuariosService {

    private rolesService: RolesService;

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        private moduleRef: ModuleRef,
        // private rolesService: RolesService
        // @Inject(forwardRef(() => RolesService))
        // private rolesService: RolesService
    ) {}

    async getAll(): Promise<Usuario[]>{
        const data = await this.usuarioRepository.find()
        // Ciclo para obtener los datos del rol en cada registro
        data.forEach(usr => {
            console.log(usr);
            // this.rolesService = this.moduleRef.get(RolesService);
            // console.log(this.rolesService.getById(usr.role));
            // console.log(this.service.getById(usr.role));
        })
        // console.log(data.length);
        return data;
    }

    async getById(id: number) {
        const data = await this.usuarioRepository.findOne(id);

        // Validamos que encuentre el Id
        if (!data) throw new NotFoundException()

        return data;
    }

    async crearUsuario(dto: CrearUsuarioDto){
        const data = this.usuarioRepository.create({ ...dto });
        return await this.usuarioRepository.save(data);
    }
}
