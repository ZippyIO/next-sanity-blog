import { type SchemaTypeDefinition } from 'sanity';
import { articleSchema } from './schemas/article';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleSchema],
};
