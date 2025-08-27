import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  Length,
} from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  customerName: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 255)
  customerEmail: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
