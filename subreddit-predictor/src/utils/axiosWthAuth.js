import axios from "axios";

// Requests are relative ("/api/...") and proxied to the backend by Vite.
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
