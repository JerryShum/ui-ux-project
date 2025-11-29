import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-009jlzljb6";
import imgLogo1 from "figma:asset/6b353e79338a9de8865dce2be855ee3982f58c13.png";

function Group() {
  return (
    <div className="h-[11px] relative shrink-0 w-[56px]">
      <div className="absolute bottom-[-4.55%] left-0 right-[-0.89%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 12">
          <g id="Group 13">
            <g id="Vector">
              <path d={svgPaths.pdd38d00} fill="#1E1E1E" />
              <path d={svgPaths.p4dcf300} fill="#1E1E1E" />
              <path d={svgPaths.p12ffd800} fill="#1E1E1E" />
              <path d={svgPaths.p35c50d00} fill="#1E1E1E" />
            </g>
            <path d={svgPaths.p254fc400} id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeWidth="2" />
            <g id="Group 12">
              <path d={svgPaths.p186cc200} fill="var(--fill-0, #1E1E1E)" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p31b47400} fillRule="evenodd" id="Vector (Stroke)_2" stroke="var(--stroke-0, #1E1E1E)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopIcons() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-between left-0 overflow-clip px-[20px] py-[9px] top-0 w-[440px]" data-name="Top Icons">
      <div className="capitalize flex flex-col font-['League_Spartan:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">16:04</p>
      </div>
      <Group />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute box-border content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-start leading-[normal] left-[calc(16.67%+11.67px)] not-italic overflow-clip p-[10px] text-[40px] text-nowrap top-[478px] whitespace-pre" data-name="Logo">
      <p className="relative shrink-0 text-[#0077ca]">Campus</p>
      <p className="relative shrink-0 text-[#ff6a39]">Cart</p>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#0077ca] box-border content-stretch flex flex-col gap-[5px] items-center justify-center left-[calc(25%+5px)] overflow-clip p-[10px] rounded-[20px] top-[689px] w-[210px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Log In</p>
    </button>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#ff6a39] box-border content-stretch flex flex-col gap-[5px] items-center justify-center left-[calc(25%+5px)] overflow-clip p-[10px] rounded-[20px] top-[751px] w-[210px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Sign Up</p>
    </button>
  );
}

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="1 - Welcome - Buttons">
      <TopIcons />
      <Logo />
      <div className="absolute inset-[23.46%_26.14%_53.74%_26.14%]" data-name="Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
      <Button onClick={() => navigate('/login')} />
      <Button1 onClick={() => navigate('/onboarding-1')} />
    </div>
  );
}
