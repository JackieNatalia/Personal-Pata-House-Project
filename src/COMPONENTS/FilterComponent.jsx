import React, { useState } from "react";

export default function DualFilter() {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");

  const options1 = ["Option A", "Option B", "Option C"];
  const options2 = ["Option X", "Option Y", "Option Z"];

  return (
    <div className="flex gap-6 p-4">
      <select
        value={filter1}
        onChange={(e) => setFilter1(e.target.value)}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md appearance-none w-48 focus:outline-none"
      >
        <option value="" disabled>
          Select by
        </option>
        {options1.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <select
        value={filter2}
        onChange={(e) => setFilter2(e.target.value)}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md appearance-none w-48 focus:outline-none"
      >
        <option value="" disabled>
          Select by
        </option>
        {options2.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
