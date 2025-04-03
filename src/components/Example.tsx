const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="text-wushu-white-100 grid w-3/4 grid-cols-1 justify-items-center gap-8 rounded-xl bg-amber-100 p-10 text-center">
      <div className="bg-wushu-red-100 w-1/2 p-5">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-8">
        <div className="bg-wushu-red-200 w-full rounded-4xl p-5">
          {props.text2}
        </div>
        <div className="bg-wushu-gold-100 w-full rounded-4xl p-5">
          {props.text2}
        </div>
      </div>
      <div className="bg-wushu-gold-200 w-1/2 p-5">{props.text3}</div>
    </div>
  );
};

export default Example;
