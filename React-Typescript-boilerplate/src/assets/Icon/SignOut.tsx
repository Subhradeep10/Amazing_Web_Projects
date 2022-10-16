export default function SignOut() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0136 3.1644L16.9379 2.84368C18.3733 2.60445 19.091 2.48483 19.6684 2.61679C20.6188 2.834 21.4044 3.4995 21.7749 4.40127C22 4.94911 22 5.67672 22 7.13193V17.066C22 18.3391 22 18.9756 21.8269 19.4628C21.466 20.479 20.5874 21.2232 19.5258 21.4122C19.0168 21.5028 18.3889 21.3981 17.1331 21.1889L17.1331 21.1889L15.0136 20.8356L15.0136 20.8356C12.6191 20.4365 11.4219 20.237 10.7109 19.3977C10 18.5585 10 17.3448 10 14.9172V9.08276C10 6.65525 10 5.44149 10.7109 4.60226C11.4219 3.76302 12.6191 3.56348 15.0136 3.1644Z"
        fill="white"
      />
      <g filter="url(#filter0_d_811_2423)">
        <path
          d="M3 12L2.53148 11.6252L2.23163 12L2.53148 12.3748L3 12ZM12 12.6C12.3314 12.6 12.6 12.3314 12.6 12C12.6 11.6686 12.3314 11.4 12 11.4V12.6ZM6.53148 6.62518L2.53148 11.6252L3.46852 12.3748L7.46852 7.37482L6.53148 6.62518ZM2.53148 12.3748L6.53148 17.3748L7.46852 16.6252L3.46852 11.6252L2.53148 12.3748ZM3 12.6H12V11.4H3V12.6Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_811_2423"
          x="1.23163"
          y="6.62518"
          width="12.3684"
          height="12.7496"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_811_2423"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_811_2423"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
