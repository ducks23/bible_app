"use server";

export async function getWord(value) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("here ", data);
      return data;
    })
    .catch((error) => {
      console.error("Error sending payload:", error);
    });
}
