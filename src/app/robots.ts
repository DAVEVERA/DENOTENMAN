import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/login', '/account/', '/winkelwagen', '/checkout'],
        },
        sitemap: 'https://denotenman.com/sitemap.xml',
    }
}
