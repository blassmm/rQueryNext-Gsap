"use client";
import { useQuery } from "@tanstack/react-query";
import styles from './FetchButton.module.css';

function FetchButton({ category }) {
  // Construir la URL dinámica usando la prop 'category'
  const endpoint = `http://localhost:5000/${category}`;

  // Usar React Query para hacer la consulta
  const { isLoading, data, error } = useQuery({
    queryKey: ['categoryData', category],
    queryFn: async ({ signal }) => {
      const response = await fetch(endpoint, { signal });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    },
    enabled: !!category, // Solo ejecuta la consulta si category tiene un valor
  });

  if (isLoading) {
    return <button>Loading...</button>;
  }
  else if (error) {
    return <button>Error: {error.message}</button>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Usuarios en la categoría: {category}</h1>
      <ul className={styles.userList}>
        {data?.map((item) => (
          <li key={item.id} className={styles.userItem}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default FetchButton;
