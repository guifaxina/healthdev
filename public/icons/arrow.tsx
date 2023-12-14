import * as React from "react"

type TProps = {
  fill?: string
  className?: string
}

function Arrow(props: TProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.858 9.167l2.15-2.159-1.175-1.175L1.666 10l4.167 4.167 1.175-1.175-2.15-2.159h13.475V9.167H4.858z"
      />
    </svg>
  )
}

export default Arrow