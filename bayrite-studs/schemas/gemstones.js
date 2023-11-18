import { defineField } from "sanity";

// schemas/pet.js
export default {
    name: 'gemstones',
    type: 'document',
    title: 'Gemstones',
    fields: [
      defineField(
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      }),
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options:{
          source: "name"
        }
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'bigImages',
        title: 'BigImages',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'number',
      },
    ]
  }