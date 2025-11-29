import svgPaths from "./svg-lk2axt1mv8";

function Textbox() {
  return (
    <div className="bg-[rgba(0,119,202,0.25)] relative rounded-[10px] shrink-0 w-full" data-name="Textbox">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end px-[10px] py-[15px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Email</p>
      <Textbox />
    </div>
  );
}

function Textbox1() {
  return (
    <div className="bg-[rgba(0,119,202,0.25)] relative rounded-[10px] shrink-0 w-full" data-name="Textbox">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end px-[10px] py-[15px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">********</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Password</p>
      <Textbox1 />
    </div>
  );
}

function Textbox2() {
  return (
    <div className="bg-[rgba(0,119,202,0.25)] relative rounded-[10px] shrink-0 w-full" data-name="Textbox">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end px-[10px] py-[15px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">+123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Phone Number</p>
      <Textbox2 />
    </div>
  );
}

function Textbox3() {
  return (
    <div className="bg-[rgba(0,119,202,0.25)] relative rounded-[10px] shrink-0 w-full" data-name="Textbox">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-end px-[10px] py-[15px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">DD / MM / YYYY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Text Input">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap whitespace-pre">Date of Birth</p>
      <Textbox3 />
    </div>
  );
}

function TextFields() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Text Fields">
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <TextInput3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6a39] box-border content-stretch flex flex-col gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[200px]" data-name="Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Sign Up</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Button">
      <Button />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] h-[675px] items-center left-0 overflow-clip p-[40px] rounded-[20px] top-[281px] w-[440px]" data-name="Content">
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0077ca] text-[24px] text-center w-[min-content]">
        <p className="leading-[normal]">Welcome</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[370px]">
        <p className="leading-[normal]">New to Campus Cart? Create Your Free Account Today! Join thousands of students buying and selling textbooks, electronics, and more right on campus.</p>
      </div>
      <TextFields />
      <Button1 />
    </div>
  );
}

function IOsIcon36Message() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="iOS / icon / 36 / message">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="iOS / icon / 36 / message">
          <path d={svgPaths.p12ee0c00} fill="var(--fill-0, white)" id="ô´" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Bar() {
  return (
    <div className="absolute bg-[#0077ca] box-border content-stretch flex gap-[49px] items-center justify-center left-0 overflow-clip px-[39px] py-[18px] rounded-tl-[20px] rounded-tr-[20px] top-[884px] w-[440px]" data-name="Bar">
      <IOsIcon36Message />
      <div className="h-[18px] relative shrink-0 w-[21px]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
            <path d={svgPaths.p242eaf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="h-[22px] relative shrink-0 w-[25px]" data-name="Vector">
        <div className="absolute inset-[-4.55%_-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
            <path d={svgPaths.p2a9cb500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="h-[22px] relative shrink-0 w-[25px]" data-name="Vector">
        <div className="absolute inset-[-4.55%_-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
            <path d={svgPaths.p1a3c0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="h-[25px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-4%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 27">
            <g id="Vector">
              <path d={svgPaths.p1d4ec080} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p34a94600} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
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

export default function Component3SignUp() {
  return (
    <div className="bg-[#0077ca] overflow-clip relative rounded-[20px] size-full" data-name="3 - Sign Up">
      <Content />
      <Bar />
      <div className="absolute capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[220px] not-italic text-[40px] text-center text-nowrap text-white top-[137px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Sign Up</p>
      </div>
      <TopIcons />
    </div>
  );
}