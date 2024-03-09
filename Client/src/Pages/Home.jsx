import Blocks from "../assets/Books.png";

function Home() {
  return (
    <div className="box_holder flex flex-col justify-start gap-3 lg:flex-row">
      <div className="w-full flex flex-col gap-3 lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl font-bold">
          TaskSphere makes it easier for you to manage projects and tasks
        </h1>
        <p>
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done.
        </p>
        <h1 className="text-xl font-bold">WHAT YOU GET FROM OUR SERVICE:</h1>
        <div className="mx-4 ">
          <div className="flex items-center gap-2">
            <div>
              <span className=" w-[8px] h-[8px] bg-black rounded-full top-2 left-0 flex"></span>
            </div>
            <h1>Unlimited cards</h1>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <span className=" w-[8px] h-[8px] bg-black rounded-full top-2 left-0 flex"></span>
            </div>
            <h1>Unlimited Power-Ups per board</h1>
          </div>
        </div>
        <button className="btn w-[200px]">REGISTER</button>
      </div>
      <div className=" lg:w-1/2 flex justify-center items-center">
        <img src={Blocks} alt="" />
      </div>
    </div>
  );
}

export default Home;
