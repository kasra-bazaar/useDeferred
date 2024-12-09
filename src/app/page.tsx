"use client";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import Comments from "~/components/Comments";
import useGetComments from "~/hooks/useGetComments";

export default function Home() {
  const { comments } = useGetComments();
  const [search, setSearch] = useState<string>("");

  const deferredSearch = useDeferredValue(search);

  const handleChange = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  return (
    <main>
      <input type="text" value={search} onChange={handleChange} />
      <Suspense fallback={<p>Loading...</p>}>
        <Comments comments={comments} deferredSearch={deferredSearch} />
      </Suspense>
    </main>
  );
}
 