import axios from "axios";

export const getToken = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });

    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw new Error("Login failed. Not recognized by API!");
  }
};