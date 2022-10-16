export default function ExportIcon({ height }: any) {
  return (
    <svg
      width={24}
      height={29}
      viewBox="0 0 24 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_160_504)">
        <path
          d="M12 5L11.2929 4.29289L12 3.58579L12.7071 4.29289L12 5ZM6.29289 9.29289L11.2929 4.29289L12.7071 5.70711L7.70711 10.7071L6.29289 9.29289ZM12.7071 4.29289L17.7071 9.29289L16.2929 10.7071L11.2929 5.70711L12.7071 4.29289ZM13 5L13 11.5L11 11.5L11 5L13 5Z"
          fill="#2E1C7B"
          fillOpacity="0.3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 13V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V13H18C19.1046 13 20 13.8954 20 15V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V15C4 13.8954 4.89543 13 6 13H11Z"
          fill="#2E1C7B"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_160_504"
          x={-4}
          y={0}
          width={32}
          height={32}
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
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_160_504"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_160_504"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
