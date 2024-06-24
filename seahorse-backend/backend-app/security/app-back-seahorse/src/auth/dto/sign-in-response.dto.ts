import { ApiProperty } from "@nestjs/swagger";

export class SignInResponse {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;

}