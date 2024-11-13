import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get('/health')
  checkHealth() {
    return this.healthService.checkHealth();
  }

  @Get('/ping')
  ping() {
    return this.healthService.checkPing();
  }
}
