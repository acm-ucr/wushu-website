import Example from "@/components/Example";
import WhoWeAre from "@/components/home/WhoWeAre";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center">
        <Example text1="Adjust" text2="these" text3="Props" />
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <WhoWeAre />
      </div>
    </div>
  );
};

export default Home;
