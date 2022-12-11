import { defineType } from "sanity";

export default defineType({
    title: 'Availabilities',
    name: 'availabilities',
    type: 'document',
    fields: [
        {
            title: 'Fact Sheet',
            name: 'factSheet',
            type: 'file',
            description: 'Upload file (pdf)'
        },
        {
            title: 'Availabilities',
            name: 'avail',
            type: 'array',
            of: [
                {
                    title: 'Availabilities',
                    name: 'avail',
                    type: 'object',
                    fields: [
                        {
                            title: 'Residence',
                            name: 'residence',
                            type: 'string',
                         },
                        {
                            title: 'Bed/Bath',
                            name: 'bedBath',
                            type: 'string',
                        },
                        {
                            title: 'Price',
                            name: 'price',
                            description: 'Include dollar sign',
                            type: 'string',
                        },
                        {
                            title: 'CC',
                            name: 'cc',
                            type: 'string',
                        },
                        {
                            title: 'RE TAX',
                            name: 'retax',
                            type: 'string',
                        },
                        {
                            title: 'Int/Ext SF',
                            name: 'intExtSf',
                            type: 'string',
                        },
                        {
                            title: 'Exposure',
                            name: 'exposure',
                            type: 'string',
                        },
                        {
                            title: 'Status',
                            name: 'status',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Available', value: 'AVAILABLE'},
                                    {title: 'Sold', value: 'SOLD'},
                                ]
                            }
                        },
                        {
                            title: 'View Listing Link',
                            name: 'viewListing',
                            type: 'url',
                        },
                        {
                            title: 'Upload Floor Plan',
                            description: 'Choose file type. Image for .jpg or .png, and File for .pdf',
                            name: 'fileType',
                            type: 'string',
                            initialValue: 'file',
                            options: {
                                list: [
                                    {title: 'File', value: 'file'},
                                    {title: 'Image', value: 'image'},
                                ],
                                layout: 'radio'
                            }
                        },
                        {
                            title: 'Image',
                            type: 'image',
                            name: 'image',
                            description: 'Proper image file types .jpg .png',
                            hidden: ({parent}) => parent?.fileType !== 'image'
                        },
                        {
                            title: 'File',
                            type: 'file',
                            name: 'file',
                            description: 'Proper file types are .pdf',
                            hidden: ({parent}) => parent?.fileType !== 'file'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'avail'
        },
        prepare() {
            return {
                title: 'Edit Availabilities & Fact Sheet'
            }
        }
    }
})