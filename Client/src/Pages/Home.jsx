import Blocks from "../assets/Books.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="box_holder flex flex-col-reverse justify-start gap-3 lg:flex-row">
      <div className="text-quaternary-color w-full flex flex-col gap-3 lg:w-1/2">
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
        <div className="flex gap-3">
          <Link className="w-full max-w-[200px]" to="/register">
            <button className="btn_main w-full">Register</button>
          </Link>
          <Link className="w-full max-w-[200px]" to="/login">
            <button className="btn_secondary w-full">Login</button>
          </Link>
        </div>
      </div>
      <div className=" lg:w-1/2 flex justify-center items-center">
        <img src={Blocks} alt="" />
      </div>
    </div>
  );
}

export default Home;
