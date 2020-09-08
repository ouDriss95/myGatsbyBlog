import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
   
   <svg xmlns="http://www.w3.org/2000/svg" width="29.82" height="45" viewBox="0 0 23.608 35.63">
      <g id="Group_1" data-name="Group 1" transform="translate(-641.977 -275.336)">
         <rect id="Rectangle_1" data-name="Rectangle 1" width="35.628" height="2" transform="translate(641.977 310.964) rotate(-89.88)" fill={fill}/>
         <rect id="Rectangle_2" data-name="Rectangle 2" width="8.6" height="8.6" rx="4.3" transform="translate(655.728 294.57)" fill="#a3a3a2"/>
         <path id="Path_13" data-name="Path 13" d="M141.71,24.946a6.821,6.821,0,0,1,12.276-4.1,13.189,13.189,0,0,0,.109-1.7h0A13.99,13.99,0,0,0,140.1,5.16H136.72V33.147H140.1a13.953,13.953,0,0,0,6.537-1.634A6.842,6.842,0,0,1,141.71,24.946Z" transform="translate(511.491 273.924)" fill={fill}/>
      </g>
   </svg>
 
  );
}