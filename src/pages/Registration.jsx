import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Registration = () => {
  const registrationFees = [
    {
      category: "UG, PG, PhD Student",
      registration: "2000 + 360 (GST)",
      spot: "2500 + 450 (GST)",
    },
    {
      category: "Academician",
      registration: "2500 + 450 (GST)",
      spot: "3000 + 540 (GST)",
    },
    {
      category: "Industry person",
      registration: "6000 + 1080 (GST)",
      spot: "6500 + 1170 (GST)",
    },
    {
      category: "International delegate (online)",
      registration: "6000 + 1080 (GST)",
      spot: "6500 + 1170 (GST)",
    },
  ];

  const importantNotes = [

    "Group registration of 10 from a single institute will qualify for 10% Discount",
    "The co-author if any, willing to participate in the conference has to only pay registration/early bird/spot registration fee as per category.",
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Registration
      </h1>

      <div className="prose max-w-none space-y-8">
        {/* Important Note */}
        <InfoCard className="bg-yellow-50 border-l-4 border-yellow-500">
          <p className="text-sm md:text-base">
            <strong>Note:</strong> If an abstract is accepted, the author/co-author must register for the event. Otherwise, the presentation will not be permitted, and the abstract will not be included in the abstract book. Any one of the authors may present the paper.
          </p>
        </InfoCard>

        {/* Registration Fees Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Fees for Conference Registration
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="table w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Category
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Registration (INR)
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Spot Registration (INR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationFees.map((fee, index) => (
                  <tr key={index} className="hover:bg-base-200">
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {fee.category}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {fee.registration}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {fee.spot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 mb-6">
            {importantNotes.map((note, index) => (
              <InfoCard key={index}>
                <p className="text-sm md:text-base">{note}</p>
              </InfoCard>
            ))}
          </div>

          <div className="text-center mb-6">
            <button
              disabled
              className="btn btn-outline text-sm md:text-base border-red-700 text-red-700 opacity-50 cursor-not-allowed"
            >
              Download Group Registration Form
            </button>
            <p className="text-xs text-gray-400 mt-1">* Will be available soon</p>
          </div>
        </section>

        {/* Payment Details Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Online Payment Procedure
          </h2>

          <p className="text-sm md:text-base mb-4">
            Through NEFT/RTGS/ fund transfer to account as per details given
            below:
          </p>

          <InfoCard className="bg-gray-50 mb-6">
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <strong>Beneficiary Name:</strong> SVKM's NMIMS
              </p>
              <p>
                <strong>Bank Name:</strong> HDFC Bank Ltd
              </p>
              <p>
                <strong>Account No.:</strong> 13871450000032
              </p>
              <p>
                <strong>Branch Name & Address:</strong> C.S. #3893, A, MAIN
                ROAD, MUKESH BHAI PATEL COMPLEX DIST. DHULE, SHIRPUR-425405,
                MAHARASHTRA, INDIA.
              </p>
              <p>
                <strong>RTGS/NEFT/IFSC Code:</strong> HDFC0001387
              </p>
              <p>
                <strong>MICR Code:</strong> 425240052
              </p>
            </div>
          </InfoCard>
        </section>

        {/* Registration Process Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Registration Process
          </h2>

          <ol className="list-decimal list-inside space-y-2 mb-6 text-sm md:text-base ml-4">
            <li>
              Pay the applicable registration fee through NEFT/RTGS or bank
              transfer.
            </li>
            <li>Complete the online registration form.</li>
            <li>Enter the UTR/Transaction Reference Number.</li>
            <li>Upload the payment receipt as proof of payment.</li>
            <li>Submit the registration form.</li>
          </ol>

          <div className="text-center">
            <button
              disabled
              className="btn bg-red-700 text-white border-red-700 text-base md:text-lg opacity-50 cursor-not-allowed"
            >
              Register Now
            </button>
            <p className="text-xs text-gray-400 mt-1">* Will be available soon</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
