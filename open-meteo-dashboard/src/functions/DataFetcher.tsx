import { useState, useEffect } from 'react';
import type { RootInterface as OpenMeteoResponse } from '../types/DashboardTypes';

export function useDataFetcher() {
  const [data, setData] = useState<OpenMeteoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-2.125&longitude=-80&current=temperature_2m,relative_humidity_2m,apparent_temperature&hourly=temperature_2m&timezone=America%2FChicago';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}