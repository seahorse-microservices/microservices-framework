import { ApiProperty } from "@nestjs/swagger";

export class GetUserRequest {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}