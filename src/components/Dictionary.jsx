"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { ClipLoader } from "react-spinners";
export default function Dictionary() {
  const [formData, setFormData] = useState({
    // Initialize formData object with empty values for input fields
    text: "",
  });
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const handleInputChange = (e) => {
    // Update the formData object with user input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    setData([]);
    fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${formData.text}\?key\=6f9b85d5-55eb-4cf2-8d3b-ed75d5d080a6 `,
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
        setSpinner(false);
        setData(JSON.parse(data).shortdef);
        return data;
      })
      .catch((error) => {
        console.error("Error sending payload:", error);
      });
  };

  return (
    <div className=" flex flex-col pt-4 mx-auto ">
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

      {spinner ? (
        <div className="mx-auto my-auto pt-20">
          <ClipLoader color="#3B81F6" />
        </div>
      ) : (
        <p></p>
      )}
      <SearchResults data={data} />

      <div className="pl-2"></div>
    </div>
  );
}
