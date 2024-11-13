import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async checkHealth() {
    return { message: 'OK' };
  }

  async checkPing() {
    return { message: 'pong' };
  }
}
