"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import { ClipLoader } from "react-spinners";
export default function SearchBar() {
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
        setSpinner(false);
        setData(JSON.parse(data.response).data);
        return data;
      })
      .catch((error) => {
        console.error("Error sending payload:", error);
      });
  };
  // add hover effect from  https://ui.aceternity.com/components/card-hover-effect
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
          <ClipLoader />
        </div>
      ) : (
        <p></p>
      )}
      <SearchResults data={data} />

      <div className="pl-2"></div>
    </div>
  );
}
