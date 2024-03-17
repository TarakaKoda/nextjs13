import { Skeleton } from "@/components/ui/skeleton";

const LoadingProfilePage = () => {
  return (
    <section>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <Skeleton className="h-36 w-36 rounded-full" />

        <div className="mt-3">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="mt-3 h-7 w-36" />

          <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-36" />
          </div>

          <Skeleton className="mt-8 h-7 w-9/12" />
        </div>
      </div>

      <div className="mb-12 mt-10">
        <Skeleton className="h-7 w-full" />

        <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
          <Skeleton className="h-28 rounded-md" />
          <Skeleton className="h-28 rounded-md" />
          <Skeleton className="h-28 rounded-md" />
          <Skeleton className="h-28 rounded-md" />
        </div>
      </div>

      <div className="mt-10 flex gap-10">
        <div className="flex flex-1 flex-col">
          <div className="flex">
            <Skeleton className="h-11 w-24 rounded-r-none" />
            <Skeleton className="h-11 w-24 rounded-l-none" />
          </div>

          <div className="mt-5 flex w-full flex-col gap-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingProfilePage;