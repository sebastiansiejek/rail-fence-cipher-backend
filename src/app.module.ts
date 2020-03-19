import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CipherFileController } from './cipher-file/cipher-file.controller';

@Module({
  imports: [],
  controllers: [AppController, CipherFileController],
  providers: [AppService]
})
export class AppModule {}
