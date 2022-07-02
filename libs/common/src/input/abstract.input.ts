import { InputType } from '@nestjs/graphql';

/**
 * AbstractInput
 *
 * @description Abstract Base Input
 */
@InputType({ isAbstract: true, description: 'base Abstract input' })
export abstract class AbstractInput {
  origin?: string;
}
