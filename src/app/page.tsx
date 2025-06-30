// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">App 2 (Next.js)</h1>
      <p className="text-lg">
        This app receives data from App 1 at 
        <code className="bg-gray-200 px-2 py-1 mx-1 rounded">/api/webhook</code>
        and forwards it to your PHP App 3.
      </p>
    </main>
  );
}

