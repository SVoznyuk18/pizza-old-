import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getStorage, ref, uploadBytes } from 'firebase/storage';

const formatTime = (time) => {
  if (time < 10) return `0${time}`;
  return `${time}`;
};

const convertToMilliseconds = (time) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const milliseconds = time?.split(':')[0] * 60 * 60 * 1000 + time?.split(':')[1] * 60 * 1000;
  return milliseconds;
};

export const formatedTimeArray = (start, end, step) => {
  const timeInterval = [];
  const startTime = convertToMilliseconds(start);
  const endTime = convertToMilliseconds(end);
  const stepMilliseconds = step * 60 * 1000;

  for (let ts = startTime; ts < endTime; ts += stepMilliseconds) {
    timeInterval.push(ts);
  }

  const intervalArray = timeInterval?.map((intervalItem) => {
    const minutes = (intervalItem / (1000 * 60)) % 60;
    const hours = Math.trunc((intervalItem / (1000 * 60 * 60)) % 24);

    return { hours: formatTime(hours), minutes: formatTime(minutes), milliseconds: intervalItem };
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

  if (category !== 'all') {
    filteredPizza = filteredPizza?.filter((item) => item.category === category);
  }
  if (sort === 'popularity') {
    filteredPizza = filteredPizza?.sort((a, b) => b.rating - a.rating);
  }
  if (sort === 'price') {
    filteredPizza = filteredPizza?.sort((a, b) => a.price - b.price);
  }
  if (sort === 'alphabet') {
    filteredPizza = filteredPizza?.sort((a, b) => a.name[0].localeCompare(b.name[0]));
  }

  return filteredPizza;
};

export const convertCost = (data) => {
  const { t } = useTranslation();
  return t('common.cost', { cost: data });
};

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
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export const uploadFiles = async (file, folderFirestore, fileName, setLoadingFile, setLoadingError, setLoadedFile) => {
  setLoadingFile(true);
  setLoadingError(false);

  const storage = getStorage();
  const spaceRef = ref(storage, `${folderFirestore}/${fileName}`);

  uploadBytes(spaceRef, file)
    .then(() => {
      setLoadingFile(false);
      setLoadedFile(true);
    })
    .catch(() => {
      setLoadingError(true);
    });
};
