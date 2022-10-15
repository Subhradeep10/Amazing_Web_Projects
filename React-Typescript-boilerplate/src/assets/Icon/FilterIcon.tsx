export const FilterIcon = (props: any) => {
  return (
    <svg
      width="24"
      onClick={props.onClick}
      color={props.color}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        file-rule="evenodd"
        clipRule="evenodd"
        d="M5.00003 2C4.44775 2 4.00003 2.44772 4.00003 3V5.00001H20V3C20 2.44772 19.5523 2 19 2H5.00003ZM19.7823 7.00001H4.21779C4.33213 7.22455 4.4891 7.42794 4.68302 7.59762L10.683 12.8476C11.4371 13.5074 12.563 13.5074 13.317 12.8476L19.317 7.59762C19.511 7.42794 19.6679 7.22455 19.7823 7.00001Z"
        fill={props.fill}
      />
      <path
        file-rule="evenodd"
        clipRule="evenodd"
        d="M14 16.7049L14 10H10V18.7049L14 16.7049Z"
        fill={props.fill}
      />
    </svg>
  );
};
