import moment from 'moment';
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
  };

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

  if(milliseconds <= currentTime) return true;

  return false;
};

export const filteredPizzaSelector = (arrPizza, category, sort) => {
  let filteredPizza = arrPizza;
  if (category) {
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


