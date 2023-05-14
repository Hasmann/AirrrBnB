import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe, Logger as commonLogger } from '@nestjs/common';
import { Logger as pinoLogger } from 'nestjs-pino';
async function bootstrap() {
  const logger = new commonLogger();
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(pinoLogger));
  const PORT = 7050;
  logger.log(`Server Running On Port:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
