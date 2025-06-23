import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Sea-casa',
    tagline: 'All you need to know about your stay',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://casa.sifterstudios.no',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarCollapsed: false,
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts'
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Sea-casa',
            logo: {
                alt: 'Sea-casa mascot',
                src: 'img/logo.svg'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial'
                },
                {
                    href: 'https://www.airbnb.no/rooms/1289061827455900501?viralityEntryPoint=1&unique_share_id=0E08AB5F-4AC5-4B90-B0A5-35B3EF54ADEB&slcid=7b81c062ebe64adcb3a25d6ea359f556&s=76&feature=share&adults=1&channel=native&slug=SgC2IZoN',
                    label: 'AirBnB',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Info',
                            to: '/'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus'
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/docusaurus'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/sifterstudios'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Sifterstudios.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
};

export default config;
