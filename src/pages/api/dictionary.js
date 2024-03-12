export default async function handler(req, res) {
  if (req.method === "POST") {
    var value = req.body.data;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`, {
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
        console.log(typeof data);

        res.status(200).json({ response: data });
      })
      .catch((error) => {
        console.error("Error sending payload:", error);
      });
  }
}
