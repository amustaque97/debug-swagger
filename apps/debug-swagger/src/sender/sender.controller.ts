import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { SenderService } from './sender.service';

import {
  B,
  GetNotificationRequestDto,
  GetNotificationResponseDto,
} from './dto/get-notifications.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('notification')
@ApiTags('Notification')
export class SenderController {
  constructor(private readonly service: SenderService) {}

  @Post()
  async t(@Body() b: B): Promise<any> {
    return this.service.handleMessage({ Body: JSON.stringify(b.body) });
  }

  @Get('')
  async getNotificationResponse(
    @Query() query: GetNotificationRequestDto,
    @Req() req?: any,
  ): Promise<GetNotificationResponseDto> {
    return this.service.getNotificationResponse(query, req);
  }
}
