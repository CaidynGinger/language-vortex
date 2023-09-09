import React, { useRef, useState } from "react";

import "./TextArea.scss";

export default function TextArea() {

  return (
    <div class="form__group">
      <textarea
        id="message"
        class="form__field"
        placeholder="Your Message"
        rows="6"
      ></textarea>
      <label for="message" class="form__label">
        Your Message
      </label>
    </div>
  );
}
