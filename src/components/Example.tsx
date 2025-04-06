const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-wushu-cream-100 flex w-2/3 flex-col items-center gap-7 rounded-lg p-10">
      <div className="w-1/2 bg-red-700 p-5 text-center text-2xl text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-4">
        <div className="w-full rounded-full bg-red-900 p-5 text-center text-2xl text-white">
          {props.text2}
        </div>
        <div className="bg-wushu-gold-100 w-full rounded-full p-5 text-center text-2xl text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-wushu-gold-200 w-1/2 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
