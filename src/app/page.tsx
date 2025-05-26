import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>MindSphere - Платформа самовдосконалення</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-800">Ласкаво просимо в MindSphere!</h1>
      <p className="text-lg text-gray-600 mt-4">Дізнайся більше про нумерологію та саморозвиток.</p>
    </div>
  );
}
