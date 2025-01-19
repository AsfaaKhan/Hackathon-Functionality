import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product';
import {category} from './categories';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
