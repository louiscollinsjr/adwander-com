import { ImageResponse } from '@vercel/og';

export const GET = async ({ url }) => {
    const title = url.searchParams.get('title') || 'Adwander - Exploring Online Experiments';
    const description = url.searchParams.get('description') || 'Adwander is a base for various online experiments and passive income explorations.';

    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                color: '#fff',
                padding: '40px',
                textAlign: 'center',
                fontFamily: 'system-ui, sans-serif',
            }}
        >
            <div style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '20px' }}>{title}</div>
            <div style={{ fontSize: '30px', opacity: 0.9 }}>{description}</div>
            <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', textAlign: 'center', fontSize: '20px', opacity: '0.7' }}>adwander.com</div>
        </div>,
        {
            width: 1200,
            height: 630,
        }
    );
};

export const config = {
    runtime: 'edge'
};
