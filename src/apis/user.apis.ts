import { fetch } from "@/lib/http.lib";
import { type User } from "@/types/user.types";

const BASE_ENDPOINT = "/users";

export const getUsersList = async () => {
  try {
    const res = await fetch<User[]>({
      endpoint: BASE_ENDPOINT,
    });
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getUserDetails = async (userId: string) => {
  try {
    const res = await fetch<User>({
      endpoint: `${BASE_ENDPOINT}/${userId}`,
    });
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
