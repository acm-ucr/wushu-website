const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className = "bg-wushu-cream-100 w-2/3 items-center justify-items-center gap-1 gap-y-10 p-10 text-white">
      <div className = "bg-wushu-red-100 w-1/2 p-5 text-center">
        {props.text1}
      </div>
      <div className = "m-10 flex w-1/2 flex-row gap-6">
        <div className="bg-wushu-red-200 w-full rounded-4xl p-5 text-center">
          {props.text2}
        </div>
        <div className = "bg-wushu-gold-100 w-full rounded-4xl p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className = "bg-wushu-gold-200 w-1/2 p-5 text-center">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
