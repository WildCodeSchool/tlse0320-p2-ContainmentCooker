import React from 'react';

export default function AdvancedList({}) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
