'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';

type Health = { status: string; database: string }

export default function Home() {
    const [health, setHealth] = useState<Health | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiFetch<Health>('/health/')
          .then(setHealth)
          .catch((e: Error) => setError(e.message))
    }, [])

    return (
        <main className='min-h-screen flex flex-col justify-center items-center gap-4'>
            <h1 className='text-4xl font-bold'>MindForge</h1>
            {error && <p className='text-red-500'>Backend unreachable: {error}</p>}
            {health && (
              <p className='text-green-600'>
                API: {health.status} | Database: {health.database}
              </p>
            )}
            {!health && !error && <p>Checking backend...</p>}
        </main>
    );
}