import * as React from "react"

const SvgFacebook = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color ? '#62E0D9' : '#fff'}
    {...props}
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 10H8v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667H15V6h-2.404C10.798 6 10 6.792 10 8.308V10z" />
  </svg>
)
export default SvgFacebook
