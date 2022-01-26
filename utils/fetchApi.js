import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// Headers

// X-RapidAPI-Host = bayut.p.rapidapi.com
// X-RapidAPI-Key = eeeef66de7msh33a2b10ac36b8dcp15723bjsncd5e055b2a54

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "eeeef66de7msh33a2b10ac36b8dcp15723bjsncd5e055b2a54",
    },
  });
  return data;
};
