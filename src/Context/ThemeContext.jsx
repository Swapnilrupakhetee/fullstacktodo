import { useContext,useState,useEffect, createContext } from "react";

export const ThemeContext=createContext();


const ThemeProvider=({children})=>{
    const[isDarkMode,setIsDarkMode]=useState(true);

    useEffect(()=>{
        const savedTheme=localStorage.getItem('theme');
        if(savedTheme)
            {
                setIsDarkMode(savedTheme==='dark');
                document.documentElement.classList.add(savedTheme==='dark' ? 'dark-mode':'light-mode');
            }
        else
        {
            document.documentElement.classList.add(savedTheme==='dark-mode');
        }
    },[])

    const toggleTheme=()=>{
        const newTheme= isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.add(newTheme==='dark'? 'dark-mode' : 'light-mode')
        document.documentElement.classList.remove(newTheme==='dark'?'light-mode':'dark-mode')

        localStorage.setItem('theme',newTheme);
    }




    return(
        <>
        <ThemeContext.Provider value={{isDarkMode,setIsDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        
        
        </>
    )







}
export default ThemeProvider;