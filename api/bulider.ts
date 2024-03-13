import { createBuilder } from "@ibnlanre/portal";
import { JsonServer } from "./axios-config";
import { Login } from "@/types";

export const builder = createBuilder({
  auth: {
    login: (data: Login) => JsonServer.post("/login", data),
  },
});
