import { InputType } from '@nestjs/graphql';

/**
 * AbstractInput
 *
 * @description 브라우저 지역 정보
 */
@InputType({ isAbstract: true, description: 'base Abstract input' })
export abstract class AbstractInput {}
