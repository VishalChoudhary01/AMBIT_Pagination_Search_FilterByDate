import { useEffect, useState,useId } from "react";
import Button from "./Button";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { policies } from "../context/context.js";
import xlsx from "json-as-xlsx";

const TableData = () => {
  const policy_ID_Number=useId();
  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPage,setItemsPerPage]=useState(10);
  const [searchWord,setSearchWord]=useState("");
  const [choosenStartDate,setChoosenStartDate]=useState("");
  const [choosenEndDate,setChoosenEndDate]=useState("");

  const filteredItems=policies.filter((policy)=>{
    const Matched_Search=policy.Title.toLowerCase().includes(searchWord.toLowerCase()) || policy.Description.toLowerCase().includes(searchWord.toLowerCase());

    const matchedStartDate=choosenStartDate?new Date(policy.Date)>=new Date(choosenStartDate) :true;
    const matchedEndDate=choosenEndDate?new Date(policy.Date) <=new Date(choosenEndDate):true
    return Matched_Search && matchedStartDate && matchedEndDate
  })

const indexof_LastItem=currentPage * itemsPerPage;
const indexof_FirstItem=indexof_LastItem-itemsPerPage;
const rendered_items =filteredItems.slice(indexof_FirstItem,indexof_LastItem);

const totalPages=Math.ceil(filteredItems.length/itemsPerPage)

useEffect(()=>{
  setCurrentPage(1);
},[searchWord,choosenStartDate,choosenEndDate,itemsPerPage])

// Excel file Downloading
const exportToExce=()=>{
  const data=[
    {
      sheet:"Policies",
      columns:[
        {label:"Title",value:"Title"},
        {label:"Description",value:"Description"},
        {label:"Year",value:"Year"},
        {label:"Date",value:"Date"},
        {label:"Time",value:"Time"},
      ],
      content:rendered_items
    }
  ];

  const settings={
    fileName:"Policies Spreadsheet",
    extraLength:3,
    writeMode:"writeFile"
  };
  xlsx(data,settings)
}
  return (
    
    <section className="p-4">
      <section className="py-2  rounded border-r border-b shadow-md shadow-gray-200  ">
        <section className="w-full flex justify-end  gap-x-2 px-2">
          <Button
            buttonContent={"Add Report"}
            buttonStyle={
              "bg-gray-800 shadow-lg hover:bg-blue-700 transition-all active:scale-105 hover:text-white text-[0.8em] text-slate-50"
            }
          />
          <Button
            buttonContent={"Download Excel"}
            buttonEvent={exportToExce}
            buttonStyle={
              "bg-gray-800 shadow-lg hover:bg-blue-700 transition-all active:scale-105 hover:text-white text-[0.8em] text-slate-50"
            }
          />
        </section>
        <p className="text-[0.9em] font-medium pl-4">
          Table no. of Entires :{" "}
          <span className="font-bold">{ filteredItems.length }</span>{" "}
        </p>
        <section className="">
          <section className="flex w-full justify-end items-center ">
            <section className="w-[70%] flex  items-center gap-x-3 px-2">
              <Input
                inputType={"text"}
                inputStyle={
                  "outline w-full text-center focus:outline-gray-500 relative focus:outline-2 outline-gray-200 rounded-md py-1 px-2"
                }
                placeholderText={"Search ...."}
                inputChange={(e)=>setSearchWord(e.target.value)}
                inputValue={searchWord}
              />
              <span className="text-gray-400 active:text-stone-600 cursor-pointer absolute top-30 right-[21.5em]">
                <FaSearch className="text-[1.3em]" />
              </span>
              <Input
                inputType={"date"}
                inputStyle={
                  "outline outline-gray-200 font-semibold text-gray-500 rounded-md text-[0.8em] py-1 px-2 uppercase"
                }
                inputChange={(e) => setChoosenStartDate(e.target.value)}
                inputValue={choosenStartDate}
              />
              <Input
                inputType={"date"}
                inputStyle={
                  "outline outline-gray-200 font-semibold text-gray-500 text-[0.8em] rounded-md py-1 px-2 uppercase"
                }
                inputChange={(e) => setChoosenEndDate(e.target.value)}
                inputValue={choosenEndDate}
              />
            </section>
          </section>
          <table className="w-full mt-6">
            <thead>
              <tr className="uppercase text-[0.8em] text-gray-400">
                <th className="border-b-2 border-r-2 w-2">pdf</th>
                <th className="border-b-2 border-r-2 w-40">title</th>
                <th className="border-b-2 border-r-2 w-52">Description</th>
                <th className="border-b-2 border-r-2 w-2">Year</th>
                <th className="border-b-2 border-r-2 w-10">Date</th>
                <th className="border-b-2 border-r-2 w-2">Time</th>
                <th className="border-b-2  w-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {rendered_items.map((policy) => (
                <tr
                  key={policy_ID_Number}
                  className="text-center border-b-2 hover:bg-stone-200  cursor-pointer transition-all border-gray-300 text-[0.8em] font-semibold "
                >
                  <td className="py-2 flex justify-center ">
                    <FaRegFilePdf className="text-lg" />
                  </td>
                  <td className="py-2">{policy.Title}</td>
                  <td className="py-2">{policy.Description}</td>
                  <td className="py-2">{policy.Year}</td>
                  <td className="py-2">{policy.Date}</td>
                  <td className="py-2">{policy.Time}</td>
                  <td className="py-2 flex justify-center items-center text-xl gap-x-3 transition-all cursor-pointer">
                    <BiSolidEdit className="text-gray-600  hover:text-gray-800" />
                    <MdDelete className="text-red-500 hover:text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
      <section className="w-full flex justify-end gap-x-4 pt-5 sc">
        <section className="flex items-center gap-x-1  ">
          <Button
            buttonContent={<FaArrowLeft />}
            buttonEvent={()=> setCurrentPage(currentPage - 1)}
            buttonDisabled={currentPage===1}
            buttonStyle={
              "mr-1 border disabled:opacity-50 disabled:scale-100 transition-all disabled:cursor-not-allowed  border-gray-600 active:scale-105 text-gray-900 rounded-lg  w-10 h-10 "
            }
          />
          <p className="text-[0.9em] font-semibold">
            <span>{currentPage}</span> <span>of</span> <span>{totalPages}</span>
          </p>
          <Button
            buttonContent={<FaArrowRight />}
            buttonDisabled={currentPage===totalPages || totalPages===0}
            buttonEvent={()=>setCurrentPage(currentPage+1)}
            buttonStyle={
              "border ml-1 border-gray-600 disabled:opacity-50 disabled:scale-100 transition-all disabled:cursor-not-allowed active:scale-105 text-gray-900  rounded-lg  w-10 h-10 "
            }
          />
        </section>
        <select
          name="itemsPerPage"
          id="itemsPerPage"
          value={itemsPerPage}
          className="border focus:outline-none border-gray-400 rounded-lg px-2"
          onChange={(e)=>setItemsPerPage(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
        </select>
      </section>
    </section>
  );
};

export default TableData;
