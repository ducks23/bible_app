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
    <div className=" flex flex-col pt-36 mx-auto ">
      <form className="flex mx-auto" onSubmit={handleSubmit}>
        <Input
          className="min-w-[30rem]"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Ask"
        />
        <Button type="submit" variant="secondary">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </form>
      <div className="max-w-[40rem] pt-10 mx-auto">
        {data.map((item, index) => (
          <div className="flex flex-col">
            <div className="p-3 font-bold">{item._id}</div>
            <div className="p-3">{item._source.text}</div>
          </div>
        ))}
      </div>

      <div className="pl-2"></div>
    </div>
  );
}
