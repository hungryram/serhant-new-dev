import { defineType } from "sanity";

export default defineType({
    title: 'Availability Display',
    name: 'availabilityDisplay',
    type: 'object',
    groups: [
        {name: 'content', title: 'Content'},
        {name: 'settings', title: 'Settings'},
      ],
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
            group: 'content',
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor',
            group: 'content',
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
            title: 'Organized Layout',
            name: 'organizedLayout',
            type: 'boolean',
            description: 'Organize layout by bedrooms',
            group: 'settings',
        },
    ]
})