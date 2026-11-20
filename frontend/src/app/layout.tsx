import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'MindForge',
    description: 'AI platform: chat, image generation and analysis, voice',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}