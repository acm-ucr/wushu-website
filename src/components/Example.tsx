const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-wushu-cream-100 grid w-2/3 items-center justify-items-center gap-10 rounded-lg p-10 text-white">
      <div className="bg-wushu-red-100 w-1/2 p-5 text-center">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-wushu-red-200 w-full rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
        <div className="bg-wushu-gold-100 w-full rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-wushu-gold-200 w-1/2 p-5 text-center">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
//<div className="w-1/2 bg-green-200 p-5 text-left">{"hi"}</div>
