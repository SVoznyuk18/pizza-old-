import { useState, useEffect } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { doc, getDoc } from "firebase/firestore";

import localization from 'moment/locale/uk'

moment().locale("uk", localization);

const formatTime = (time) => {
  if (time < 10) return `0${time}`;

  return `${time}`;
};

const convertToMilliseconds = (time) => {
  const milliseconds = time?.split(':')[0] * 60 * 60 * 1000 + time?.split(':')[1] * 60 * 1000;
  return milliseconds;
}

export const formatedTimeArray = (start, end, step) => {

  let timeInterval = [];
  const startTime = convertToMilliseconds(start);
  const endTime = convertToMilliseconds(end);
  const stepMilliseconds = step * 60 * 1000;

  for (let ts = startTime; ts < endTime; ts += stepMilliseconds) {
    timeInterval.push(ts);
  }

  const intervalArray = timeInterval?.map(intervalItem => {

    const hours = moment.duration(intervalItem).hours();
    const minutes = moment.duration(intervalItem).minutes();

    return { hours: formatTime(hours), minutes: formatTime(minutes), milliseconds: intervalItem }
  });

  return intervalArray;
};

export const setDisableTime = (currentTime) => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const milliseconds = convertToMilliseconds(`${hours}:${minutes}`);

  if (milliseconds <= currentTime) return true;

  return false;
};

export const filteredPizzaSelector = (arrPizza, category, sort) => {
  let filteredPizza = arrPizza;

  if (category !== "all") {
    filteredPizza = filteredPizza?.filter(item => item.category === category);
  }
  if (sort === "popularity") {
    filteredPizza = filteredPizza?.sort((a, b) => {
      return b.rating - a.rating;
    })
  }
  if (sort === "price") {
    filteredPizza = filteredPizza?.sort((a, b) => {
      return a.price - b.price;
    })
  }
  if (sort === "alphabet") {
    filteredPizza = filteredPizza?.sort((a, b) => {
      return a.name[0].localeCompare(b.name[0])
    })
  }

  return filteredPizza;
}

export const convertCost = (data) => {
  const { t } = useTranslation();
  return t('common.cost', { cost: data });
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export const getAutorization = async(db, uid) => {
  const docRef = doc(db, "autorization", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const {id, email, role} = docSnap.data().shema;
    return {id, email, role};
  }
}