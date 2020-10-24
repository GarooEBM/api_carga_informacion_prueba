import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/entidades/rol.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Rol)
        private readonly rolesRepository: Repository<Rol>
    ) {}

    async getById(id: number) {
        const data = await this.rolesRepository.findOne(id);

        // Validamos que encuentre el Id
        if (!data) throw new NotFoundException()

        return data;
    }
}
