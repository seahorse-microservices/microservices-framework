import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    name: string;
    @Prop({ unique: true, length: 100,  })
    email: string;
    @Prop()
    password: string;
    organizationId: mongoose.Types.ObjectId;


}

export const UserSchema = SchemaFactory.createForClass(User);
