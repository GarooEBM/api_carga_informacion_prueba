import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    imports: [
        // datos de coneccion para la base de datos
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'apithy',
            entities: [],
            synchronize: true,
        })
    ]
})

export class DbModule {
    // Exportamos todos los objetos TypeORM Connection para que estén disponibles para todo el proyecto
    constructor(
        private readonly coneccion: Connection
    ) {}
}
