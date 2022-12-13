import React, { FormEvent, ChangeEvent, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import toast from "react-hot-toast";
import successImg from '../assets/success.png';
import CountdownTimer from "./CountdownTimer";
import { AddProject } from "./AddProject";
import useDarkMode from "../hook/useDarkMode";

export const Projects = () => {
    const [name, setName] = useState<string>("");
    const [matric, setMatric] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<string | null >();
	const [completion, setCompletion] = useState<boolean>(false);
    const [overlay, setOverlay] = useState<boolean>(false);


    const fileChangeHandler = (e: any) => {
		setSelectedFile(e.target.files[0]);
	};


    const handleSubmitProject = (e: FormEvent) => {
        e.preventDefault();

        if (name === "" || matric === "") {
            return toast.error("Fields cannot be empty!", {duration: 3000, id:'empty'});
        }

        if (completion) {
          return toast.error("Portal closed!", {duration: 3000, id:'elapsed'});
        }


        toast.loading("submitting", {duration: 3000, id:"submit"})
        setOverlay(true);

       setTimeout(() => {
        toast(
            () => (
              <section className="w-full py-4">
                <img src={successImg} className="w-24 mx-auto" alt="success" />

                <article className="text-center mt-4">
                    <h1 className="md:text-xl text-lg font-semibold">
                        Upload Successful!
                    </h1>
                </article>
              </section>
            )
        )

        setName('');
        setMatric('');
        setSelectedFile(null);
        setOverlay(false)
       }, 3000)

    }



    const [darkMode, setDarkMode] = useDarkMode();
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    return (
        <section className="h-screen flex items-center flex-col gap-10 justify-center py-12 sm:px-6 lg:px-8">
            {overlay &&  <div className="bg-black opacity-50 fixed top-0 bottom-0 z-50 w-full h-full left-0 right-0"></div>}
            <CountdownTimer 
                date={Date.now() + 90000000000}
                setCompletion={setCompletion}
            />
            <div className="max-w-md w-[95%] p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
                <div className="flex justify-between">
                    <h1 className="font-medium dark:text-white">Report Submission Portal</h1>
                    <DarkModeSwitch
                        style={{ width: '20px', height: '20px' }}
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        size={120}
                    />
                </div>
                <AddProject  
                    handleSubmitProject={handleSubmitProject}
                    name={name}
                    matric={matric}
                    setName={setName}
                    setMatric={setMatric}
                    fileChangeHandler = {fileChangeHandler}
                />
              
            </div>
            <a href="https://github.com/MERCYSUCCESS" target="_blank">
                <p className="text-gray-400 font-medium text-xs mt-3">@MercySuccess</p>
            </a>
        </section>
    )
}
