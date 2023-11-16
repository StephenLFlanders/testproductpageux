import { ImageResponse } from '@vercel/og';
import { colors } from '@/data/config/colors';
import { metadata } from '@/data/config/metadata';
import { readFile } from 'fs/promises';
import path from 'path';
import mime from 'mime-types';

export async function GET() {
  const imagePath = path.join(process.cwd(), '/public/static/images/logo.png');
  const file = await readFile(imagePath);
  const mimeType = mime.lookup(imagePath);

  const logoImage = `data:${mimeType};base64,${file.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: colors.primary.lighter,
            opacity: 0.6,
            background: `linear-gradient(149deg, ${colors.primary.lighter} -6.11%, #F9F2FB 81.12%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            width: '100%',
            maxWidth: 500,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoImage} alt="Logo" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '36px 48px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h1
            style={{
              fontSize: 48,
              color: 'black',
              marginBottom: 0,
            }}
          >
            {metadata.title}
          </h1>
          <p
            style={{
              marginTop: 0,
              fontSize: 26,
              color: 'black',
              fontWeight: 700,
            }}
          >
            {metadata.description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
