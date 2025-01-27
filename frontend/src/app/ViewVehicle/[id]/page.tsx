"use client"
import { useParams } from 'next/navigation';

export default function ViewVehiclePage() {
  const params = useParams(); // Pega o parâmetro dinâmico
  const { id } = params;

  return (
    <div>
      <h1>Detalhes do Veículo</h1>
      <p>Veículo com ID: {id}</p>
    </div>
  );
}
