import React from "react";
import InfoCard from "../components/ui/InfoCard";

const Contact = () => {
  const contactPersons = [
    { name: "Dr. Preeti Sangave", phone: "+91 8369413913" },
    { name: "Dr. Shashikant Bagade", phone: "+91 9637474753" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Contact Us
      </h1>

      <div className="prose max-w-none space-y-8">
        {/* Contact Persons Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Contact Persons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {contactPersons.map((person, index) => (
              <InfoCard key={index}>
                <div className="space-y-2">
                  <p className="font-semibold text-base md:text-lg">
                    {person.name}
                  </p>
                  <p className="text-sm md:text-base flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${person.phone}`}
                      className="hover:text-red-700"
                    >
                      {person.phone}
                    </a>
                  </p>
                </div>
              </InfoCard>
            ))}
          </div>
        </section>

        {/* General Contact Information */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            General Contact Information
          </h2>

          <InfoCard className="mb-6">
            <div className="space-y-3 text-sm md:text-base">
              <p className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700 shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+912563295545" className="hover:text-red-700">
                    +91-2563-295545
                  </a>{" "}
                  Ext 101/117/122/123/124
                </span>
              </p>

              <p className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700 shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:icngt2027@nmims.edu"
                    className="hover:text-red-700"
                  >
                    icngt2027@nmims.edu
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700 shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.nmims.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-700"
                  >
                    www.nmims.edu
                  </a>
                </span>
              </p>
            </div>
          </InfoCard>
        </section>

        {/* Address Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">
            Address
          </h2>

          <InfoCard className="mb-6">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-700 shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-sm md:text-base">
                <p className="font-semibold mb-2">
                  SVKM's NMIMS Deemed-to-be-University
                </p>
                <p>Mukesh Patel Technology Park,</p>
                <p>Babulde Bank of Tapi River, Mumbai-Agra Road, NH 3,</p>
                <p>Shirpur, Dist-Dhule-425405</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </InfoCard>

          {/* Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.6625389668134!2d74.84184457547632!3d21.284821580429377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf2ee920604553%3A0x17fd878d62441fe6!2sSVKM&#39;s%20NMIMS%20University%20MPTP%20Shirpur%20Campus!5e0!3m2!1sen!2sin!4v1763555176068!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
