import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  //Put,
  //Delete,
  //Query,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.prismaService.user.findMany();
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.prismaService.user.findUnique({ where: { id: Number(id) } });
  }

  @Post('user')
  async createUser(
    @Body()
    userData: {
      login: string;
      avatar_url: string;
      name: string;
      followers: number;
      public_repos: number;
      public_gists: number;
      html_url: string;
      email?: string;
      location?: string;
      bio?: string;
      company?: string;
    },
  ): Promise<UserModel> {
    return this.prismaService.user.create({
      data: userData,
    });
  }
}
