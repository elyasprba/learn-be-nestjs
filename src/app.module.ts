import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [CommonModule, UserModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
