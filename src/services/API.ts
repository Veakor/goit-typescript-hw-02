import axios from "axios";

const ACCESS_KEY = "uRbjthHwB56Dd64vCktCP15eYSWhxayYeNHDzHA5aBQ";

export async function getImages<T>(
  search: string = "",
  page: number = 1
): Promise<T> {
  if (search === "") {
    throw new Error("Search query is required.");
  }

  const url = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: `${ACCESS_KEY}`,
    page: `${page}`,
    per_page: 12,
    query: `${search}`,
  };
  const res = await axios.get(url, { params });
  if (res.data.results.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data.results;
  }
}