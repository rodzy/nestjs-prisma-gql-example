import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async getClient() {
    const user = await prisma.user.findFirst({
      where: {
        id: 1,
      },
    });
    return user;
  }
}
