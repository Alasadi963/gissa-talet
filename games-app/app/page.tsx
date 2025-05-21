'use client';
import { useEffect, useState } from 'react';

type Game = {
  id: number;
  title: string;
  genre: string;
  platform: string;
  release_date: string;
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      const params = new URLSearchParams();
      if (genre) params.append('genre', genre);
      if (platform) params.append('platform', platform);
      if (year) params.append('year', year);

      const res = await fetch(`/api/games?${params.toString()}`);
      const data = await res.json();
      setGames(data);
    };

    fetchGames();
  }, [genre, platform, year]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Spel</h1>
      <div className="flex gap-4 mb-4">
        <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <input placeholder="Plattform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
        <input placeholder="Utgivningsår (t.ex. 2015)" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <ul className="space-y-2">
        {games.map((game) => (
          <li key={game.id} className="border p-2 rounded">
            <h2 className="font-semibold">{game.title}</h2>
            <p>Genre: {game.genre} | Plattform: {game.platform}</p>
            <p>Utgiven: {game.release_date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
