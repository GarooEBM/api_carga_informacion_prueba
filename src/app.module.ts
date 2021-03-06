import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './controladores/usuarios/usuarios.controller';
import { UsuariosService } from './servicios/usuarios/usuarios.service';
import { ArchivoService } from './servicios/archivo/archivo.service';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './modulos/rol/rol.module';

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
      // se buscan todas las entidades
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
