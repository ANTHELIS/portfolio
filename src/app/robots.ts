import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mithupaul.me';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Add paths you don't want indexed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
