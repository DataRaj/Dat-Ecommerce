import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  const companyName = "Dattaraj's Ecom Store";
  const ownerName = "Dattaraj";
  const address = "Navi Mumbai, Maharashtra, India, 410206";
  const phoneNumber = "9082337115";
  const email = "dhadas808@yahoo.com";

  return (
    <section className="px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">Contact Us</h2>
      <div className="flex flex-row items-center space-x-8">
        <div className="flex flex-col gap-8 text-base font-medium md:text-lg">
          <div className="flex flex-col gap-1">
            <p>Company Name:</p>
            <span className="font-normal">{companyName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Owner Name:</p>
            <span className="font-normal">{ownerName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Address:</p>
            <span className="font-normal">{address}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Phone Number:</p>
            <span className="font-normal">{phoneNumber}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p>Email:</p>
            <span className="font-normal">{email}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
