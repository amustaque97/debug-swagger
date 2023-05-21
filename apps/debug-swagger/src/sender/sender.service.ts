import { Injectable } from '@nestjs/common';
import {
  GetNotificationRequestDto,
  GetNotificationResponseDto,
} from './dto/get-notifications.dto';

@Injectable()
export class SenderService {
  constructor() {}

  public async handleMessage(message: any) {
    const m = { ...message, Body: JSON.parse(message.Body) };
  }

  async getNotificationResponse(
    query: GetNotificationRequestDto,
    req?: any,
  ): Promise<GetNotificationResponseDto> {
    const req_trace_id = req.headers['x-request-id'];

    return { data: [req_trace_id] };
  }
}
