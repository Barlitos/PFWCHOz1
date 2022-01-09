import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Dokumentacja
      <h2>Projekt wykonany na podstawie lab 9</h2>
      
      <h2>Zmienione:</h2>
      <ul>
      <li>konfiguracja umożliwiająca poprawne działanie aplikacji</li>
      <li>podział na  stronę z kalkulatorem, stronę główną i opis</li>
      <li>dodanie strony z opisem</li>
      <li>ograniczenie indeksu elementu do 20</li>
      <li>dodanie przycisku "Historia" wyświetlającego 10 ostatnich indeksów</li>
      </ul>
    </div>
  );
};