import type { Schema, Struct } from '@strapi/strapi';

export interface TextItems extends Struct.ComponentSchema {
  collectionName: 'components_text_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    line1: Schema.Attribute.String;
    line2: Schema.Attribute.String;
    line3: Schema.Attribute.String;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.items': TextItems;
      'text.text': TextText;
    }
  }
}
