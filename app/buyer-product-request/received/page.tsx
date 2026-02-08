import Link from "next/link";

export default function Received() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 space-y-5">
      <h1 className="text-2xl font-semibold">Request received</h1>

      <p className="text-muted-foreground">
        Thank you. Your submission has been received for internal review.
        Submissions are assessed on institutional readiness and alignment with our
        export framework.
      </p>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">What happens next</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>We review details and may request supporting documentation.</li>
          <li>Only qualified submissions will be contacted.</li>
          <li>
            If aligned, you will receive next-step instructions via your corporate
            email.
          </li>
        </ul>
      </div>

      <div className="pt-2 flex gap-3">
        <Link
          href="/transaction-framework"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
        >
          Review transaction framework
        </Link>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}