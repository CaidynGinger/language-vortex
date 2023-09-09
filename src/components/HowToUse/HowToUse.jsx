import React from "react";

import "./HowToUse.scss";

export const HowToUse = () => {
  return (
    <div className="how-to-container">
      <h2>What can this app do you you</h2>
      <br/>
      <p>
        The Language Translation App is a powerful tool that allows users to
        easily translate text from one language to another. Whether you need to
        communicate in a foreign language or simply want to learn a new one,
        this app is designed to make the translation process simple and
        efficient. In this guide, we'll walk you through the steps to use the
        app effectively.
      </p>
      <h4>Step 1</h4>
      <p>
        Tap on the "Source Language" dropdown menu and select the language you
        want to translate from.
      </p>
      <p>
        Next, tap on the "Target Language" dropdown menu and select the language
        you want the text to be translated into.
      </p>
      <h4>Step 2</h4>
      <p>
        In the provided text box, type or paste the text you want to translate.
      </p>
      <p>Once you've entered the text, tap the "Translate" button.</p>
      <p>
        The app will process the text and provide you with the translated
        version in the selected target language.
      </p>
      <h4>Step 3</h4>
      <p>
      Carefully review the translated text to ensure accuracy.

      </p>
      <p>If needed, you can make manual adjustments to the translation by editing the text directly in the text box.</p>
      <p>
        Done!
      </p>
    </div>
  );
};
