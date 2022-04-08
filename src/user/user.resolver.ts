import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Logger } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation(() => User)
  // registerUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   Logger.log(createUserInput);
  //   return createUserInput;
  //   // return this.userService.create(createUserInput);
  // }
  @Mutation('registerUser')
  RegisterUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    Logger.log(createUserInput);
    return this.userService.create(createUserInput);
  }
  //
  @Query(() => User)
  users(): boolean {
    return true;
    // return this.userService.findOne(id);
  }
}
