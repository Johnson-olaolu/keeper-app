import React from 'react';


function Note (props){
 return (
     <div className = "Note bg-white rounded-lg p-3 m-4 w-60 float-left shadow-lg">
         <h1 className = "text-base mb-2 font-bold ">{props.title}</h1>
         <p className = "text-sm mb-3 whitespace-pre-wrap break-words">{props.content}</p>
     </div>
 )   
}

export default Note;
