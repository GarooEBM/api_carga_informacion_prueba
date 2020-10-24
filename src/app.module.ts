import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './modulos/db/db.module';
import { UsuariosController } from './controladores/usuarios/usuarios.controller';

@Module({
  imports: [DbModule],
  controllers: [AppController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
