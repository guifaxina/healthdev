import * as React from "react"

type TProps = {
  fill?: string
  className?: string
}

function Notification(props: TProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 18.333c-.92 0-1.666-.746-1.666-1.666h3.333c0 .92-.746 1.666-1.667 1.666zm6.667-2.5H3.333v-1.666L5 13.333V8.75c0-2.885 1.184-4.756 3.334-5.267V1.667h3.333v1.816C13.816 3.993 15 5.863 15 8.75v4.583l1.667.834v1.666zM10 4.792A3 3 0 007.396 6a4.743 4.743 0 00-.73 2.75v5.417h6.668V8.75c.043-.97-.211-1.93-.73-2.75A3 3 0 0010 4.792z"
      />
    </svg>
  )
}

export default Notification
