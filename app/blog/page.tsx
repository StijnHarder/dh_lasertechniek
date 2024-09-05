import { Suspense } from "react";
import Loading from "../loading";
import PostList from "./PostList";

export default function page() {
  return (
    <div className="text-[#454A63]">
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
