const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-8 rounded-2xl bg-[#F0E9D0] p-10 text-xl text-white">
      <div className="flex w-1/2 justify-center bg-[#C30000] p-5 text-left">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="mr-4 flex w-full justify-center rounded-full bg-[#8A0000] p-5 text-left">
          {props.text2}
        </div>
        <div className="flex w-full justify-center rounded-full bg-[#B88803] p-5 text-right">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="flex w-1/2 justify-center bg-[#D99F00] p-5 text-left">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
