import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { SocketGateway } from './socket/socket.gateway';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProjectModule, PrismaModule],
  providers: [SocketGateway],
})
export class AppModule {}
