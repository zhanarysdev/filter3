const token = localStorage.getItem("token");
export async function fetcher({ url, body }) {
  const res = await fetch(`https://api.filter.li/api/v1/${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((res) => res.json())
    .then((res) => res.result);
  return res;
}
