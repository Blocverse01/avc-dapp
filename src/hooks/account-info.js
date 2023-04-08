import { httpClient } from "../util/http-client";

export const useNewsLetterSubscription = () => {
  const queryString = [
    `api_secret=${import.meta.env.VITE_CONVERTKIT_API_SECRET}`,
  ];

  return useQuery(
      `accountInfo-${queryString}`,
      async () => {
        const response = await httpClient.get<AccountInfoData>(`account?${queryString}`);

        return response.data;
      }
  );
};