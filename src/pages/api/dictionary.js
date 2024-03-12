export default async function handler(req, res) {
  if (req.method === "POST") {
    var value = req.body.data;
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${value}\?key\=6f9b85d5-55eb-4cf2-8d3b-ed75d5d080a6 `,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("here ", data);
        console.log(typeof data);

        res.status(200).json({ response: data });
      })
      .catch((error) => {
        console.error("Error sending payload:", error);
      });
  }
}
