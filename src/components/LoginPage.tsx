import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-gogw1udwjz";
import BottomNavBar from "./BottomNavBar";

function Textbox({ value, onChange, type = "text" }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string }) {
  return (
    <div className="bg-[rgba(0,119,202,0.25)] relative rounded-[10px] shrink-0 w-full" data-name="Textbox">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end px-[10px] py-[15px] relative w-full">
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="bg-transparent border-none outline-none flex-1 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black"
            placeholder={type === "password" ? "********" : "example@example.com"}
          />
        </div>
      </div>
    </div>
  );
}

function TextInput({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Email</p>
      <Textbox value={value} onChange={onChange} type="email" />
    </div>
  );
}

function TextInput1({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Password</p>
      <Textbox value={value} onChange={onChange} type="password" />
    </div>
  );
}

function Frame({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-end relative shrink-0 w-full">
      <TextInput1 value={value} onChange={onChange} />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap underline whitespace-pre cursor-pointer hover:opacity-70">Forgot Password?</p>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="bg-[#ff6a39] box-border content-stretch flex flex-col gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[200px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Log In</p>
    </button>
  );
}

function Frame1({ onClick }: { onClick: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[20px] px-0 relative shrink-0">
      <Button onClick={onClick} />
    </div>
  );
}

function Content({ email, setEmail, password, setPassword, onSubmit }: { 
  email: string; 
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  password: string; 
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] h-[675px] items-center left-0 overflow-clip p-[40px] rounded-[20px] top-[281px] w-[440px]" data-name="Content">
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0077ca] text-[24px] text-center w-[min-content]">
        <p className="leading-[normal]">Welcome</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[370px]">
        <p className="leading-[normal]">Welcome Back to Campus Cart! Log in now to access your personalized dashboard, manage your listings, and continue exploring amazing student deals.</p>
      </div>
      <TextInput value={email} onChange={setEmail} />
      <Frame value={password} onChange={setPassword} />
      <Frame1 onClick={onSubmit} />
    </div>
  );
}





function Group() {
  return (
    <div className="h-[11px] relative shrink-0 w-[56px]">
      <div className="absolute bottom-[-4.55%] left-0 right-[-0.89%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 12">
          <g id="Group 13">
            <g id="Vector">
              <path d={svgPaths.pdd38d00} fill="white" />
              <path d={svgPaths.p4dcf300} fill="white" />
              <path d={svgPaths.p12ffd800} fill="white" />
              <path d={svgPaths.p35c50d00} fill="white" />
            </g>
            <path d={svgPaths.p254fc400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <g id="Group 12">
              <path d={svgPaths.p186cc200} fill="var(--fill-0, white)" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p31b47400} fillRule="evenodd" id="Vector (Stroke)_2" stroke="var(--stroke-0, white)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopIcons() {
  return (
    <div className="absolute bg-[#0077ca] box-border content-stretch flex items-start justify-between left-0 overflow-clip px-[20px] py-[9px] top-0 w-[440px]" data-name="Top Icons">
      <div className="capitalize flex flex-col font-['League_Spartan:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">16:04</p>
      </div>
      <Group />
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log('Login submitted');
    // Navigate to home page after successful login
    navigate('/home');
  };

  return (
    <div className="bg-[#0077ca] overflow-clip relative rounded-[20px] size-full" data-name="3 - Log In">
      <Content 
        email={email} 
        setEmail={(e) => setEmail(e.target.value)} 
        password={password} 
        setPassword={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
      <BottomNavBar />
      <div className="absolute capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[220px] not-italic text-[40px] text-center text-nowrap text-white top-[137px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Log In</p>
      </div>
      <TopIcons />
    </div>
  );
}
