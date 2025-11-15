import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onSearch?: (term: string) => void;
  close?: () => void; // ← nouvelle prop
}

export const SearchBar = ({ onSearch, close }: SearchBarProps) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (onSearch) onSearch(input);

      navigate(`/products?search=${input}`);

      if (close) close(); // ← ferme la search bar automatiquement
    }
  };

  return (
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      style={{
        padding: "10px",
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #ddd",
        marginBottom: "20px",
      }}
    />
  );
};
