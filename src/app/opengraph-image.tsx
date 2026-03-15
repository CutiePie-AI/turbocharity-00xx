import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TurboCharity — From Idea to 501(c)(3) in Days';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #0d9488 100%)',
          padding: '60px',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(45, 212, 191, 0.15)',
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 800,
              color: 'white',
            }}
          >
            TC
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            TurboCharity
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.3,
            marginBottom: '32px',
          }}
        >
          From Idea to 501(c)(3) in Days, Not Months
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(191, 219, 254, 0.9)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
            marginBottom: '40px',
          }}
        >
          AI-powered nonprofit creation. Generate bylaws, articles of
          incorporation, and auto-fill IRS Form 1023-EZ.
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            letterSpacing: '1px',
          }}
        >
          turbocharity.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
