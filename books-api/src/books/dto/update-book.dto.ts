import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsDate()
  @IsOptional()
  publishedDate?: Date;

  @IsString()
  @IsOptional()
  description?: string;
}
