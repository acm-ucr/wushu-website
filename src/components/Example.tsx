const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-wushu-cream-100 flex w-2/3 flex-col items-center gap-1 rounded-md p-10">
      <div className="bg-wushu-red-100 text-wushu-white-100 w-1/2 flex-col p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="m-8 flex w-1/2 flex-row gap-10">
        <div className="bg-wushu-red-200 text-wushu-white-100 w-full rounded-4xl p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-wushu-gold-100 text-wushu-white-100 w-full rounded-4xl p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      {
        <div className="bg-wushu-gold-200 text-wushu-white-100 w-1/2 flex-col gap-5 p-5 text-center text-lg">
          {props.text3}
        </div>
      }
    </div>
  );
};

export default Example;
