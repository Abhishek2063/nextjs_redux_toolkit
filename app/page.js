import Counter from './components/Counter';

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-bold mb-8">Redux Toolkit with Next.js App Router</h1>
      <Counter />
    </main>
  );
}