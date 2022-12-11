import { defineType } from "sanity";

export default defineType({
    name: 'appearances',
    title: 'Appearance',
    type: 'document',
    groups: [
        {title: 'Branding', name: 'branding'},
        {title: 'Header', name: 'header'},
        {title: 'Colors and Buttons', name: 'colors'},
        {title: 'Footer', name: 'footer'},
    ],
    fields: [
        {
            title: 'Home Page',
            name: 'homePage',
            description: 'Select your home page',
            type: 'reference',
            to: { type: 'homeDesign' },
        },
        {
            title: 'Branding',
            name: 'branding',
            type: 'branding',
            group: 'branding'
        },
        {
            title: 'Header',
            name: 'header',
            type: 'headerMenu',
            group: 'header'
        },
        {
            title: 'Colors',
            name: 'mainColors',
            type: 'mainColors',
            group: 'colors'
        },
        {
            title: 'Global Button Design',
            name: 'globalButtonDesign',
            type: 'object',
            group: 'colors',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    title: 'Button Corners',
                    name: 'buttonCorner',
                    description: 'Higher numbers will give more rounded button corners',
                    type: 'number',
                    validation: Rule => Rule.error().min(0).max(100)
                },
                {
                    title: 'X Axis Padding',
                    name: 'xPadding',
                    description: 'padding to the left and right of the button',
                    type: 'number',
                    validation: Rule => Rule.error().min(5).max(20)
                },
                {
                    title: 'Y Axis Padding',
                    name: 'yPadding',
                    description: 'padding to the top and bottom of the button',
                    type: 'number',
                    validation: Rule => Rule.error().min(20).max(100)
                }
            ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'object',
            group: 'footer',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    title: 'Footer Logo',
                    name: 'footerLogo',
                    type: 'image'
                },
                {
                    title: 'Footer Text',
                    name: 'footerText',
                    type: 'contentEditor',
                    description: 'Perfect for a brief bio'
                },
                {
                    title: 'Footer Disclaimer',
                    name: 'footerDisclaimer',
                    type: 'contentEditor',
                },
                {
                    title: 'Footer Background Color',
                    name: 'footerBackgroundColor',
                    type: 'color',
                },
                {
                    title: 'Header Color',
                    name: 'headerColor',
                    type: 'color',
                },
                {
                    title: 'Text Color',
                    name: 'textColor',
                    type: 'color',
                }
            ]
        }
    ],
    preview: {
        prepare(){
            return {
                title: 'Appearance'
            }
        }
    }
})