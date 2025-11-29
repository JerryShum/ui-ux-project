import { useNavigate, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-y697pnm2ku";

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="absolute h-[72px] left-0 top-[884px] w-[440px]" data-name="Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 72">
        <g id="Bar">
          <path d={svgPaths.pe955b30} fill="var(--fill-0, #0077CA)" />
          
          {/* Messages Icon - Left */}
          <g 
            onClick={() => navigate('/messages')} 
            className="cursor-pointer"
            style={{ pointerEvents: 'bounding-box' }}
          >
            <path d={svgPaths.p2ba91200} fill="var(--fill-0, white)" id="ô´" stroke="var(--stroke-0, white)" />
          </g>
          
          {/* Heart/Favorites Icon */}
          <g 
            onClick={() => console.log('Favorites clicked')} 
            className="cursor-pointer"
            style={{ pointerEvents: 'bounding-box' }}
          >
            <path d={svgPaths.p130afa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          
          {/* Home Icon - Center */}
          <g 
            onClick={() => navigate('/home')} 
            className="cursor-pointer"
            style={{ pointerEvents: 'bounding-box' }}
          >
            <path d={svgPaths.p3d274b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          
          {/* Shopping Cart Icon */}
          <g 
            onClick={() => console.log('Cart clicked')} 
            className="cursor-pointer"
            style={{ pointerEvents: 'bounding-box' }}
          >
            <path d={svgPaths.p2a4a2400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          
          {/* Profile Icon - Right */}
          <g 
            onClick={() => console.log('Profile clicked')} 
            className="cursor-pointer"
            style={{ pointerEvents: 'bounding-box' }}
          >
            <path d={svgPaths.p33d7fb00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2ac17f80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}
