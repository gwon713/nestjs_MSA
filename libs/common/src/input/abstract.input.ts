import { InputType } from '@nestjs/graphql';

/**
 * AbstractInput
 *
 * @description Abstract Base Input
 */
@InputType({ description: 'base Abstract input' })
export class AbstractInput {
  origin?: string;
}
