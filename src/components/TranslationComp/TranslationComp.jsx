import React, { useState } from "react";
import TextArea from "../UI/TextArea/TextArea";
import "./TranslationComp.scss";
import { DropDown } from "../UI/DropDown/DropDown";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

export const TranslationComp = () => {
  const [Translation, setTranslation] = useState("");

  const [OriginalLanguage, setOriginalLanguage] = useState("");

  const [TranslationLanguage, setTranslationLanguage] = useState("");
  const [TranslationLanguageInput, setTranslationLanguageInput] =
    useState("");

  var dropdownItems = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Korean", code: "ko" },
    { name: "Chinese", code: "zh" },
    { name: "Russian", code: "ru" },
    { name: "Arabic", code: "ar" },
    { name: "Hindi", code: "hi" },
    { name: "Portuguese", code: "pt" },
    { name: "Dutch", code: "nl" },
    { name: "Greek", code: "el" },
    { name: "Hebrew", code: "he" },
    { name: "Polish", code: "pl" },
    { name: "Romanian", code: "ro" },
    { name: "Swedish", code: "sv" },
    { name: "Turkish", code: "tr" },
    { name: "Vietnamese", code: "vi" },
  ];

  // const addSatelliteFormEventHandler = () => {
  //   if (showAddSatelliteForm === true) {
  //     setShowAddSatelliteForm(false);
  //   } else {
  //     setShowAddSatelliteForm(true);
  //   }
  // };

  const onSelectedOriginalLanguage = (data) => {
    setOriginalLanguage(data);
  };

  const onSelectedTranslationLanguage = (data) => {
    setTranslationLanguage(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    translateText();
  };

  function getLanguageByName(languageName) {
    // Iterate through the dropdownItems array
    for (let i = 0; i < dropdownItems.length; i++) {
      // Check if the current item's name matches the provided languageName
      if (dropdownItems[i].name === languageName) {
        // Return an object with both name and code
        return dropdownItems[i].code;
      }
    }

    // If no match is found, return null or an appropriate value
    return null; // You can choose to return null or any other value to indicate no match.
  }

  const translateText = () => {
    const apiKey = "AIzaSyD3Ii0gzl3a7hIh7xIwLJKEBq-7BCz248Q"; // Replace with your actual API key
    const apiUrl = "https://translation.googleapis.com/language/translate/v2";

    const requestData = {
      q: Translation, // Replace with your input text
      target: getLanguageByName(TranslationLanguage), // Replace 'es' with the target language code you want to translate to
      format: "html", // You can change this to 'text' if your source text is plain-text
      source: getLanguageByName(OriginalLanguage), // Replace 'en' with the source language code if needed
      model: "nmt", // Use 'nmt' for the Neural Machine Translation model
    };

    console.log('====================================');
    console.log(requestData);
    console.log('====================================');

    // return null

    // Build the query string
    const queryString = new URLSearchParams(requestData);

    // Construct the full URL with the API key
    const url = `${apiUrl}?${queryString.toString()}&key=${apiKey}`;

    // Define the Fetch API request
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the translation response here
        console.log(data.data.translations[0].translatedText);
        setTranslationLanguageInput(data.data.translations[0].translatedText)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  return (
    <div className="background">
      <form className="form-container" onSubmit={onSubmit}>
        <div className="inputs">
          <div className="input-side">
            <DropDown
              label={"Original Language"}
              onSelectedItem={onSelectedOriginalLanguage}
              items={dropdownItems.map((item) => item.name)}
            />
            <br />
          </div>
          <p>→</p>
          <div className="input-side">
            <DropDown
              label={"Translation Language"}
              onSelectedItem={onSelectedTranslationLanguage}
              items={dropdownItems.map((item) => item.name)}
            />
            <br></br>
          </div>
        </div>
        <Input
          label={"Type Something to translate"}
          type={"text"}
          value={Translation}
          onChange={(e) => setTranslation(e.target.value)}
        />
        <Button>Translate</Button>
        <br/>
        <br/>
        <h4>Here is the Translated Text:</h4>
        <br/>
        <p className="translated-text">{TranslationLanguageInput}</p>
      </form>
    </div>
  );
};
