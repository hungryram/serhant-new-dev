import { defineType } from "sanity";

export default defineType({
    title: 'Contact Page',
    name: 'contactPage',
    type: 'object',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Text',
            name: 'text',
            type: 'contentEditor'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color'
        },
        {
            title: 'Text Color',
            name: 'textColor',
            type: 'color'
        }
    ]
})