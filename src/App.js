import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, sentLanguage] = useState('es');
  const [text, setText] = useState(''); 

  return (
    <div>
      <Field onChange = {setText}/>
      <Languages language = {sentLanguage} onLanguageChange= {sentLanguage}/> 
      <hr/>
      <Translate text={text} language={language}/>
    </div>
  );
}
