import React from "react";
import { Calendar, FileText, CheckCircle, UploadCloud, Ticket, Clock, Award } from "lucide-react";

const ImpDates = () => {
  const timeline = [
    {
      event: "Paper Submission Deadline",
      date: "15 November 2026",
      icon: FileText,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      event: "Acceptance Notification",
      date: "5 December 2026",
      icon: CheckCircle,
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      event: "Camera Ready Paper Submission",
      date: "21 December 2026",
      icon: UploadCloud,
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      event: "Early-Bird Registration",
      date: "31 December 2026",
      icon: Ticket,
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
    {
      event: "Regular Registration",
      date: "15 January 2027",
      icon: Calendar,
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      event: "Late Registration",
      date: "28 February 2027",
      icon: Clock,
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      event: "Conference Dates",
      date: "26–27 March 2027",
      icon: Award,
      badgeColor: "bg-red-100 text-red-800 border-red-200 font-bold",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-red-700">
        Important Dates
      </h1>
      <p className="text-center text-slate-600 mb-8 text-sm sm:text-base">
        Key milestones & deadlines for ICNGT 2027
      </p>

      {/* Tabular Form */}
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-red-700 text-white text-sm sm:text-base uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Event / Milestone</th>
                <th className="py-4 px-6 font-semibold text-right sm:text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <tr
                    key={index}
                    className={`hover:bg-red-50/40 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-50 text-red-700 shrink-0">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span>{item.event}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-700 text-right sm:text-left whitespace-nowrap">
                      <span className={`inline-block px-3 py-1 rounded-full border text-xs sm:text-sm ${item.badgeColor}`}>
                        {item.date}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImpDates;

