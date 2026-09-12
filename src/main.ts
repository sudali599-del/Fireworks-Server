import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

let cachedServer: any = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:3000',
      'https://fireworks-wine.vercel.app',
      'https://fireworks-five-gamma.vercel.app',
      'https://www.selvaganapathytraders.in',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  return app;
}

// Start local server if not running inside Vercel serverless environment
if (!process.env.VERCEL) {
  (async () => {
    const app = await bootstrap();
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: http://localhost:${port}`);
  })();
}

// The export for Vercel serverless function
export default async (req: any, res: any) => {
  if (!cachedServer) {
    const app = await bootstrap();
    await app.init();
    cachedServer = app.getHttpAdapter().getInstance();
  }
  return cachedServer(req, res);
};

