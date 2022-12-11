import { defineType } from "sanity";

export default defineType({
    title: 'Video',
    name: 'video',
    type: 'object',
    fields: [
        {
            title: 'Video URL',
            name: 'videoUrl',
            type: 'string'
        },
        {
            title: 'Video Title',
            name: 'title',
            type: 'string',
            description: 'Used for screen readers'
        },
        {
            title: 'Enable Controls',
            name: 'enableControls',
            type: 'boolean',
            description: 'Display Play/Pause button'
        }
    ]
})