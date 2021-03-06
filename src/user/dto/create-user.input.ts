import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType('CreatUserInput')
export class CreateUserInput {
  @Field({ description: 'Example field (placeholder)' })
  id: string;

  @Field()
  displayName: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
