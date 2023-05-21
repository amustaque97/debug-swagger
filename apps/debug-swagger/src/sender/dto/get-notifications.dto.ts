import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class B {
  @IsNotEmpty()
  body: any;
}

export class GetNotificationRequestDto {
  @IsOptional()
  @IsString()
  abc?: string;

  @IsOptional()
  @IsString()
  xyz?: string;

  @IsOptional()
  @IsString()
  mno?: string;
}

export class GetNotificationResponseDto {
  data: string[];
}
