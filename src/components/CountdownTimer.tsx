import { FC, useContext } from "react";
import Countdown from "react-countdown";


interface CountDownTimerTypes {
    date: any;
    setCompletion: (value: React.SetStateAction<boolean>) => void;
  }
  
  interface RendererTypes {
    hours: any;
    minutes: any;
    seconds: number;
    completed: boolean;
  }
  


const CountdownTimer: FC<CountDownTimerTypes> = ({date, setCompletion}) => {

  const renderer = ({ hours, minutes, seconds, completed }: RendererTypes) => {

  return (
    <div>
        <h1 className='mb-2 font-medium dark:text-white'>Submission ends in:</h1>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content dark:text-white bg-white dark:bg-slate-800">
    <span className="countdown font-mono text-3xl">
      <span>{Math.trunc(hours / 24)}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content dark:text-white bg-white dark:bg-slate-800">
    <span className="countdown font-mono text-3xl">
      <span>{hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content dark:text-white bg-white dark:bg-slate-800">
    <span className="countdown font-mono text-3xl">
      <span>{minutes}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content dark:text-white bg-white dark:bg-slate-800">
    <span className="countdown font-mono text-3xl">
      <span>{seconds}</span>
    </span>
    sec
  </div>
</div> {completed && <p className="mt-4 font-normal block dark:text-white">Time up! You can no longer submit.</p>}
    </div>
  )
  };

  return (
    <Countdown
      date={date}
      onComplete={() => setCompletion(true)}
      renderer={renderer}
      daysInHours={true}
    />
  );
  
}

export default CountdownTimer