import { ValidationPipe } from '@nestjs/common';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CrearUsuarioDto {
    // Validamos los tipos de datos con la libreria class-validator
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNumber()
    role: number;
}