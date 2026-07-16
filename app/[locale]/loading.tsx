import Container from "@/common/components/elements/Container";

export default function Loading() {
  return (
    <Container>
      <div className="flex flex-col space-y-4 animate-pulse">
        {/* Page heading skeleton */}
        <div className="space-y-3 pb-6">
          <div className="h-8 w-48 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 w-80 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <div className="h-[200px] w-full bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="flex gap-2 pt-2">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 w-6 rounded bg-neutral-200 dark:bg-neutral-800"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
