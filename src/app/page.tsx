'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [latest, setLatest] = useState<any>(null);

  useEffect(() => {
    fetch('/api/latest')
      .then(res => res.json())
      .then(data => setLatest(data.latest));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">App 2 (Next.js)</h1>
      <p className="text-lg mb-4">
        This app receives data from App 1 at 
        <code className="bg-gray-200 px-2 py-1 mx-1 rounded">/api/webhook</code>
        and forwards it to your PHP App 3.
      </p>

      {latest ? (
        <div className="bg-gray-100 text-left p-4 rounded w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Latest Data Received:</h2>
          <pre>{JSON.stringify(latest, null, 2)}</pre>
        </div>
      ) : (
        <p className="text-sm text-gray-500">No data received yet.</p>
      )}
    </main>
  );
}
