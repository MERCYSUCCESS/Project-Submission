import { ChangeEvent, FormEvent } from "react";



export type AddProjectProps = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    matric: string
    setMatric: React.Dispatch<React.SetStateAction<string>>,
    handleSubmitProject: (e: FormEvent) => void
    fileChangeHandler: (e: ChangeEvent) => void

}