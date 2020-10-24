import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearUsuarioDto } from 'src/dtos/usuario.dto';
import { Usuario } from 'src/entidades/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) {}

    async getAll(): Promise<Usuario[]>{
        return await this.usuarioRepository.find();
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
