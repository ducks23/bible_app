"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [formData, setFormData] = useState({
    // Initialize formData object with empty values for input fields
    text: "",
  });
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    // Update the formData object with user input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/aws", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search_term: formData.text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("here ", data);
        setData(JSON.parse(data.response).data);
        return data;
      })
      .catch((error) => {
        console.error("Error sending payload:", error);
      });

    // setData(JSON.parse(res.response).data);
  };
  console.log(data);

  return (
    <div className=" flex flex-col pt-16 mx-auto ">
      <form className="flex mx-auto" onSubmit={handleSubmit}>
        <div className="p-2">
          <Input
            className="sm:min-w-40 lg:min-w-[30rem]"
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Ask"
          />
        </div>
        <div className="p-2">
          <Button type="submit" variant="secondary">
            search
          </Button>
        </div>
      </form>
      <div className="max-w-[40rem] px-3 pt-10 mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex p-2 flex-col">
            <div className="bg-secondary rounded rounded-lg">
              <div className="p-3 font-bold">{item._id}</div>
              <div className="p-3">{item._source.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pl-2"></div>
    </div>
  );
}
