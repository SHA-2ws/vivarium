function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className="dark:saturate-50 dark:brightness-[300%] transition-colors hue-rotate-[285deg] dark:hue-rotate-[0deg] brightness-[50%] "
      enableBackground="new 0 0 500 500"
      viewBox="0 0 500 500"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
    >
      <g transform="translate(-130,-845) scale(3)">
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="c"
          x1={127.83}
          x2={132.8135}
          y1={371.1169}
          y2={296.3658}
        >
          <stop offset={0} stopColor="#6e45a7" />
          <stop offset={0.4017} stopColor="#8e2b96" />
          <stop offset={1} stopColor="#c4007a" />
        </linearGradient>
        <path
          d="M155.826 382.155c-4.973 21.763-20.574 28.247-28.042 28.598-8.157-.311-22.879-5.566-28.042-28.598-3.11-14.445 1.313-34.939 9.379-51.012 7.602-16.198 18.847-27.975 18.663-27.887-.184-.088 11.061 11.689 18.664 27.887 8.066 16.073 12.489 36.567 9.378 51.012z"
          fill="url(#c)"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="d"
          x1={131.8699}
          x2={160.9399}
          y1={423.8904}
          y2={317.9924}
        >
          <stop offset={0} stopColor="#6e45a7" />
          <stop offset={0.4017} stopColor="#8e2b96" />
          <stop offset={1} stopColor="#c4007a" />
        </linearGradient>
        <path
          d="M156.268 390.655c-11.709 15.889-25.031 21.214-31.802 20.36-6.22-1.322-20.244-10.438-12.242-40.852 5.238-18.92 25.759-39.731 46.096-46.73 20.215-8.016 37.072-4.201 36.724-4.409.024-.148-8.384 14.218-16.115 29.319-7.919 15.379-14.947 31.607-22.661 42.312z"
          fill="url(#d)"
          opacity={0.9}
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="e"
          x1={55.9509}
          x2={144.2279}
          y1={365.2427}
          y2={365.2427}
        >
          <stop offset={0} stopColor="#6e45a7" />
          <stop offset={0.4017} stopColor="#8e2b96" />
          <stop offset={1} stopColor="#c4007a" />
        </linearGradient>
        <path
          d="M95.989 391.902c12.107 15.589 25.922 20.27 32.955 19.004 6.462-1.713 21.053-11.854 12.841-42.526-5.378-19.065-26.619-39.183-47.712-45.174-20.964-7.038-38.478-2.159-38.116-2.391-.024-.15 8.659 14.07 16.638 29.082 8.173 15.285 15.418 31.491 23.394 42.005z"
          fill="url(#e)"
          opacity={0.9}
        />
      </g>
    </svg>
  )
}

export default SvgComponent
