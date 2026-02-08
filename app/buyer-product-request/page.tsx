export const metadata = {
  title: "Buyer Product Request | Simcol Petroleum",
  description:
    "Institutional buyer intake for refined petroleum product export requests (Jet A-1, AGO).",
};

export default function BuyerProductRequestPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Buyer Product Request Submission
        </h1>
        <p className="text-muted-foreground">
          Institutional use only. Submission does not constitute an offer,
          allocation, or commitment. Requests are reviewed internally and only
          qualified submissions will be contacted.
        </p>
      </header>

      <section className="rounded-2xl border p-6 space-y-6">
        <form
          action="/api/buyer-product-request"
          method="POST"
          className="space-y-8"
        >
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">
              Buyer Identification
            </legend>
            <Input name="companyName" label="Legal Company Name" required />
            <Input name="country" label="Country of Incorporation" required />
            <Input name="registeredAddress" label="Registered Address" required />
            <Input name="website" label="Website" required />
            <Input
              name="emailDomain"
              label="Corporate Email Domain"
              placeholder="e.g., company.com"
              required
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Authorized Contact</legend>
            <Input name="contactName" label="Full Name" required />
            <Input name="contactTitle" label="Title / Position" required />
            <Input
              name="contactEmail"
              label="Corporate Email"
              type="email"
              required
            />
            <Input name="contactPhone" label="Telephone" required />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Product Request</legend>
            <Select
              name="product"
              label="Requested Product"
              required
              options={[
                "Jet A-1 (Aviation Turbine Fuel)",
                "AGO (West African specification Gas Oil)",
              ]}
            />
            <Input
              name="quantityMt"
              label="Requested Quantity (MT)"
              placeholder="e.g., 20,000"
              required
            />
            <Select
              name="deliveryBasis"
              label="Delivery Basis"
              required
              options={["FOB", "CIF"]}
            />
            <Input
              name="portOfDischarge"
              label="Port of Discharge (if CIF)"
              placeholder="e.g., Takoradi"
            />
            <Input
              name="loadingWindow"
              label="Preferred Loading Window"
              placeholder="e.g., March 10–25, 2026"
              required
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold">Financial Readiness</legend>
            <Select
              name="paymentInstrument"
              label="Payment Instrument"
              required
              options={["LC", "SBLC", "Other"]}
            />
            <Input
              name="issuingBank"
              label="Issuing Bank (name & country)"
              placeholder="e.g., Bank Name, UAE"
              required
            />
          </fieldset>

          <div className="space-y-3">
            <label className="flex gap-3 items-start">
              <input
                type="checkbox"
                name="declaration"
                required
                className="mt-1"
              />
              <span className="text-sm">
                I confirm that the information provided is accurate and submitted
                for internal commercial review.
              </span>
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl border px-5 py-3 font-medium hover:bg-black/5"
            >
              Submit Request
            </button>

            <p className="text-sm text-muted-foreground">
              For submission issues, contact{" "}
              <a className="underline" href="mailto:simon@simcolgroup.com">
                simon@simcolgroup.com
              </a>
              .
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

function Input({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border px-3 py-2"
      />
    </label>
  );
}

function Select({
  name,
  label,
  options,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border px-3 py-2"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}