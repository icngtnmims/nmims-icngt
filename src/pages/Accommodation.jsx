import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Accommodation = () => {
  const hostelRates = [
    {
      type: "Non-AC",
      baseRate: "₹ 700",
      gst: "12% GST",
      total: "₹ 784",
    },
    {
      type: "AC",
      baseRate: "₹ 1200",
      gst: "12% GST",
      total: "₹ 1344",
    },
  ];

  const nearbyHotels = [
    { name: "Hotel Dwarakamai", contact: "9850256488" },
    { name: "Surya Palace", contact: "02563-257404" },
    { name: "Hotal Atithi", contact: "02563-255716" },
    { name: "Hotel Aaram", contact: "02563-256162" },
    { name: "Hotel Malhar- Residencency", contact: "02563-256719" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Accommodation
      </h1>

      <div className="prose max-w-none space-y-8">
        {/* Campus Accommodation Section */}
        <section>
          <p className="text-base md:text-lg mb-6 text-justify">
            Fully furnished accommodation on sharing basis will be provided to
            the participants on first-come-first-served basis in the campus
            hostels.
          </p>

          {/* <p className="text-base md:text-lg mb-6 text-justify">
            Those who wish to stay in hotel should make the reservation
            themselves. Details are available on website.
          </p> */}

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Hostel Accommodation Rates (Inside Campus)
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="table w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Type
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Base Rate (Per day/Bed)
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    GST
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {hostelRates.map((rate, index) => (
                  <tr key={index} className="hover:bg-base-200">
                    <td className="border border-gray-300 p-3 text-sm md:text-base font-semibold">
                      {rate.type}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {rate.baseRate}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {rate.gst}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base font-semibold">
                      {rate.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <InfoCard className="bg-yellow-50 border-l-4 border-yellow-500 mb-6">
            <p className="text-sm md:text-base">
              <strong>Note:</strong> Separate hostel accommodation for male
              /female participants.
            </p>
          </InfoCard>
        </section>

        {/* Payment Details Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Accommodation Charges Payment Mode
          </h2>

          <p className="text-sm md:text-base mb-4">
            Through NEFT / RTGS / fund transfer to account as per details given
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
                <strong>Branch Name & Address:</strong> C.S. #3893, A, Main
                Road, Mukesh Bhai Patel Complex, Dist. Dhule, Shirpur-425405,
                Maharashtra, India.
              </p>
              <p>
                <strong>RTGS/NEFT/IFS Code:</strong> HDFC0001387
              </p>
              <p>
                <strong>MICR Code:</strong> 425240052
              </p>
            </div>
          </InfoCard>

          <div className="text-center mb-6">
            <button
              disabled
              className="btn bg-red-700 text-white border-red-700 text-base md:text-lg opacity-50 cursor-not-allowed"
            >
              Accommodation Request Form
            </button>
            <p className="text-xs text-gray-400 mt-1">* Will be available soon</p>
          </div>
        </section>

        {/* Nearby Hotels Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Nearby Hotels
          </h2>

          <p className="text-base md:text-lg mb-6 text-justify">
            Alternatively, participants can choose to stay at hotels nearby and
            make their own reservations. Below are some hotels in Shirpur:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="table w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Sr. No.
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Name of the Hotel
                  </th>
                  <th className="border border-gray-300 p-3 text-left text-sm md:text-base">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {nearbyHotels.map((hotel, index) => (
                  <tr key={index} className="hover:bg-base-200">
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {hotel.name}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm md:text-base">
                      {hotel.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accommodation;
