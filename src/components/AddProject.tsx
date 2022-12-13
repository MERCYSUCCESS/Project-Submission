import { AddProjectProps } from "../types";

export const AddProject = ({ handleSubmitProject, name, matric, setName, setMatric, fileChangeHandler }: AddProjectProps) => {
    return (
        <form onSubmit={handleSubmitProject} className="flex flex-col gap-5 my-4">
            <input placeholder="Full Name" className="h-10 px-3 py-2 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-xl sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" id="add-todo" type="text" name="task" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Matric Number" className="h-10 px-3 py-2 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-xl sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" id="add-todo" type="text" name="task" value={matric} onChange={(e) => setMatric(e.target.value)} />


        <label>
            <input type="file" className="text-sm dark:text-slate-200
            file:mr-5 file:py-2 file:px-6
            file:rounded-xl file:border-0
            file:text-sm file:font-medium
            file:bg-violet-500 file:text-white
            hover:file:cursor-pointer hover:file:bg-gray-200
            hover:file:text-violet-500"
            aria-describedby="file_input_help" id="file_input" accept=".doc,.docx,application/pdf" 
            onChange={fileChangeHandler} 
          />
        </label>


            <button type="submit"
                aria-label="Add todo"
                className="h-10 bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 font-semibold text-white">
                Submit
            </button>
        </form>
    )
}