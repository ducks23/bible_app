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
  const [error, setError] = useState("");

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
    setError("");
    fetch(`/api/search?q=${encodeURIComponent(formData.text)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search returned ${response.status}`);
        }
        return response.json();
      })
      .then((body) => setData(body.results))
      .catch((error) => {
        console.error("Search failed:", error);
        setError("Search is unavailable right now.");
      })
      .finally(() => setSpinner(false));
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
          <ClipLoader color="#3B81F6" />
        </div>
      ) : (
        <p></p>
      )}
      {error && <p className="mx-auto pt-4 text-sm">{error}</p>}
      <SearchResults data={data} />

      <div className="pl-2"></div>
    </div>
  );
}
