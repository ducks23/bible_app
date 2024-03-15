"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "./ui/use-toast";
import SearchResults from "@/components/SearchResults";
import { ClipLoader } from "react-spinners";
import { getWord } from "@/lib/actions";

function Definitions({ data }) {
  console.log("inside def", data);
  return (
    <div>
      {" "}
      <ul>
        {data.map((item, index) => (
          <li>
            <div className="p-1">{"- " + item.definition}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meaning({ data }) {
  console.log("inside meanign", data);
  return (
    <div>
      {" "}
      {data.map((item, index) => (
        <div className="p-3">
          <div className="font-bold"> {item.partOfSpeech}</div>

          <Definitions data={item.definitions} />
        </div>
      ))}
    </div>
  );
}
function Word({ data }) {
  console.log("inside word", data);
  return (
    <div>
      {data.map((item, index) => (
        <div>
          <div className="text-2xl">{item.word}</div>
          <Meaning data={item.meanings} />
        </div>
      ))}
    </div>
  );
}

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
    console.log(formData.text);
    const res = getWord(formData.text)
      .then((data) => {
        console.log("data", data);
        setData(data);
        console.log("data", data[0].meanings[0].definitions[0].definition);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Word Not Found",
        });
        setData([]);
        console.log(error);
      });
    console.log("response ", res);

    setSpinner(false);
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
            placeholder="Search Dictionary"
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
      <div className=" p-10 text-sm">
        <Word data={data}></Word>
      </div>

      <div className="pl-2"></div>
    </div>
  );
}
