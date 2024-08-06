import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsDate()
  publishedDate: Date;

  @IsString()
  description: string;
}
