import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://denotenman.com';

    const shopRoutes = [
        '/noten',
        '/noten/amandelen',
        '/noten/cashewnoten',
        '/noten/hazelnoten',
        '/noten/macadamia-noten',
        '/noten/paranoten',
        '/noten/pecannoten',
        '/noten/pistachenoten',
        '/noten/walnoten',
        '/notenpasta',
        '/pitten-zaden',
        '/gedroogd-fruit',
        '/muesli-granen',
        '/chocolade',
        '/bakproducten',
        '/snacks',
        '/acties',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const infoRoutes = [
        '/wie-zijn-wij',
        '/bestellen-verzenden',
        '/betaalmethodes',
        '/contact',
        '/herroepen-retourneren',
        '/garantie',
        '/klachten',
        '/werken-bij-denotenman',
        '/algemene-voorwaarden',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...shopRoutes,
        ...infoRoutes,
    ];
}
