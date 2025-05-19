import Example from "@/components/Example";
import MeetTheBoard from "@/components/board/BoardMemberCard";

const Home = () => {
  return (
    <div className="font-arimo flex h-screen w-screen items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
    </div>
  );
};

export default Home;
export default function Home() {
  return <MeetTheBoard />;
}
