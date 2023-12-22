const useTimeConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = Math.round(num % 60);
  return `${hours}h ${minutes}m`;
};

export default useTimeConvert;
