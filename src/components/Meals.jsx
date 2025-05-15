import { useEffect, useState } from 'react';
import MealItem from './MealItem';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      // if (!response.ok) {
      // }

      try {
        const response = await fetch('http://localhost:3000/meals');
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
