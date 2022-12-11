import { defineType } from "sanity";

export default defineType({
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    groups: [
        {title: 'Content', name: 'content'},
        {title: 'Settings', name: 'settings'},
    ],
    fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
          group: 'content',
          description: 'Headings are H2 by default. Use the Content Editor for H1 tags'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor',
            group: 'content'
        },
        {
            title: 'Primary Button',
            name: 'button',
            type: 'buttonSettings',
            group: 'content'
        },
        {
          title: 'Secondary Button',
          name: 'secondaryButton',
          type: 'secondaryButton',
          group: 'content'
      },
        {
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [
            {
            title: 'Image',
            name: 'image',
            type: 'image',
            }
          ],
          options: {
            layout: 'grid',
          },
        },
        {
            title: 'Animation',
            name: 'animation',
            type: 'string',
            options: {
                list: [
                    {title: 'Fade', value: 'fade'},
                    {title: 'Slide', value: 'slide'},
                ]
            },
            group: 'settings',
        },
        {
            title: 'Disable Pagination',
            name: 'disablePagination',
            type: 'boolean',
            group: 'settings',
        },
        {
            title: 'Disable Navigation Arrows',
            name: 'disableNavigation',
            type: 'boolean',
            group: 'settings',
        },
        {
            title: 'Full Width',
            name: 'fullWidth',
            type: 'boolean',
            group: 'settings',
        },
        {
          title: 'Remove Padding',
          name: 'removePadding',
          type: 'boolean',
          group: 'settings',
      },
        {
          title: 'Background Options',
          name: 'background',
          group: 'settings',
          type: 'backgroundOptions',
      }
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images',
          content: 'content.0.children.0.text',
          title: 'heading'
        },
        prepare(selection) {
          const { images, image, title, content } = selection;
          return {
            title: title || content,
            subtitle: `Gallery section of ${images?.length} images`,
            media: image[0].image,
          };
        },
      },
})