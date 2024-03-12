import { invoke } from "@/lib/utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("inside post method");
    var values = req.body;
    res.status(200).json({ response: "hello" });
  }
}
