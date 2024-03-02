import { useEffect, useState } from "react";
import FoodPage from "./component/FoodPage"
import Header from "./component/Header"

export const BASE_URL = "http://localhost:9000"

function App()
{
    const [Data , setData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [searchval , setSearchVal] = useState(null);
    const [selectbtn , setSelectbtn] = useState("All");
  
    useEffect(() =>{
      setLoading(true);
      const FechFoodItem = async() =>{
      try{
          const response = await fetch(BASE_URL);
          
          const json = await response.json();
          
          setData(json);
          setLoading(false);
          setSearchVal(json);
      }catch{
        setError("Unable to fetch data");
      }
    };
      FechFoodItem();
    },[])
      
    console.log(Data);

    function handalsearchval(event)
    {
        let val = event.target.value;

        if(val === "")
        {
          setSearchVal(null)
        }

        const filterval = Data?.filter((food) =>(
          food.name.toLowerCase().includes(val.toLowerCase())
        ))
        setSearchVal(filterval);
    }

    function handalbutton(item)
    {
       if(item === "All")
       {
        setSearchVal(Data);
        setSelectbtn("All");
        return;
       }

       const filterval = Data?.filter((data) =>(
        data.type.toLowerCase().includes(item.toLowerCase())
       ))

       setSearchVal(filterval);
       setSelectbtn(item);
    }
    if(error) return <div>{error}</div>
    if(loading) return <div>Loading.......</div>

  return (
    <>
      
      <Header handalsearchval={handalsearchval} handalbutton={handalbutton}/>
      <FoodPage Data={searchval}/>
      
    </>
  )
}

export default App
