// Unified OG endpoint: Uses Satori/Resvg for local dev, Vercel OG for production/edge

export const GET = async ({ url }: { url: URL }) => {
    const title = url.searchParams.get('title') || 'Adwander - Exploring Online Experiments';
    const description = url.searchParams.get('description') || 'Adwander is a base for various online experiments and passive income explorations.';

    // Use Satori + Resvg for OG image generation (Node.js/serverless)
    const satori = (await import('satori')).default;
    const { Resvg } = await import('@resvg/resvg-js');

    // Load Geist Sans font via fetch from static directory
    const fontUrl = new URL('/geist-sans-latin-400-normal.ttf', url.origin).toString();
    const fontRes = await fetch(fontUrl);
    if (!fontRes.ok) throw new Error('Failed to load Geist Sans font');
    const fontData = await fontRes.arrayBuffer();

    // Generate SVG with Satori
    const svg = await satori(
        {
            type: 'div',
            props: {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1200px',
                    height: '630px',
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '40px',
                    textAlign: 'center',
                    fontFamily: 'Geist Sans, system-ui, sans-serif',
                    position: 'relative',
                },
                children: [
                    {
                        type: 'div',
                        props: {
                            style: { fontSize: 60, fontWeight: 'bold', marginBottom: 20 },
                            children: title,
                        },
                    },
                    {
                        type: 'div',
                        props: {
                            style: { fontSize: 30, opacity: 0.9 },
                            children: description,
                        },
                    },
                    {
                        type: 'div',
                        props: {
                            style: {
                                position: 'absolute',
                                bottom: 40,
                                left: 0,
                                right: 0,
                                textAlign: 'center',
                                fontSize: 20,
                                opacity: 0.7,
                            },
                            children: 'adwander.com',
                        },
                    },
                ],
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Geist Sans',
                    data: fontData,
                    weight: 400,
                    style: 'normal',
                },
            ],
        }
    );

    // Convert SVG to PNG using Resvg
    const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
};

export const config = {
  runtime: 'nodejs18.x'
};
