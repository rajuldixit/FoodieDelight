import { useEffect, useState } from "react";
import { useGetAllRestoQuery } from "../services/RestoApi";

const useRestoData = () => {
  const [restoList, setRestoList] = useState([]);
  const { data, isFetching, isError } = useGetAllRestoQuery(10);

  useEffect(() => {
    try {
      setRestoList(data.resto);
    } catch (error) {}
  }, [data]);
  return { restoList, isFetching, isError };
};

export default useRestoData;
