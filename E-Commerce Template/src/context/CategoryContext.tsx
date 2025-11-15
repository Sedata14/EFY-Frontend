import { createContext, useState, type ReactNode, useContext } from 'react';


interface CategoryContextType {
  category: string;
  setCategory: (category: string) => void;
}


export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategory doit être utilisé à l\'intérieur d\'un CategoryProvider');
    }
    return context;
};


export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};