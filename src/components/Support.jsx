import { useState } from 'react';
export default () =>
{
  const [count, setCount] = useState(0);
  return (
  <button className="outline"onClick={() => 
    setCount(count + 1)}>


    {count === 0 ? "Click to support US": `Supported ${count} times.`}
    {/* {(() => {
      if (count === 0){
        return "CLICK ME PLEASE WE HAVE NO SUPPORT";
      }
      else
      {
        return `Supported ${count} times`;
      }
    })()} */}
    </button>
  )
}