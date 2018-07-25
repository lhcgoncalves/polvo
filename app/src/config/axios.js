import axios from "axios";
import configApp from "./../config/app";

export const server = axios.create({
  baseURL: configApp.endpoint.contacts
});
