import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product';
import {category} from './categories';
import { user } from './user';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,user],
}
