import React from "react";

const TextHighlighter = ({ text }) => {
  const damageTypes = {
    "Fire DMG": "#ef4444",
    "Ice DMG": "#0ea5e9",
    "Imaginary DMG": "#eab308",
    "Lightning DMG": "#d946ef",
    "Physical DMG": "#6b7280",
    "Quantum DMG": "#4338ca",
    "Wind DMG": "#22c55e",
    "Fire DoT": "#ef4444",
    "Wind DoT": "#22c55e",
    "Physical DoT": "#6b7280",
    "Lightning DoT": "#d946ef",
    "Wind Shear": "#22c55e",
    Burned: "#ef4444",
    Burn: "#ef4444",
    Shocked: "#d946ef",
    Shock: "#d946ef",
    Bleeding: "#6b7280",
    Bleed: "#6b7280",
    DoTs: "#ec4899",
    DoT: "#ec4899",
  };

  const highlightDamageTypes = (text) => {
    const regex = new RegExp(
      Object.keys(damageTypes).join("|") + "|\\+?\\d+(?:\\.\\d+)?%?\\+?",
      "gi",
    );

    let result = [];
    let lastIndex = 0;

    text.replace(regex, (match, index) => {
      const color = damageTypes[match] || "#f59e0b";
      result.push(
        <span key={index}>
          {text.substring(lastIndex, index)}
          <b style={{ color }}>{match}</b>
        </span>,
      );
      lastIndex = index + match.length;
    });

    result.push(<span key={text.length}>{text.substring(lastIndex)}</span>);

    return result;
  };

  return <div>{highlightDamageTypes(text)}</div>;
};

export default TextHighlighter;
