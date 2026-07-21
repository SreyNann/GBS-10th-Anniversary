import { useEffect, useMemo, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = await res.json();
        console.log("Parsed JSON:", json);

        // Normalize data
        const formatted = json.map((item) => ({
          Business: item.Business || "",
          Status: item.Attendance || "Declined",
          Guests: Number(item.Guest || 0),
        }));

        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch sheet data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Derived stats
  const stats = useMemo(() => {
    const submissions = data?.length;
    const totalGuests = data?.reduce((sum, d) => sum + d.Guests, 0);
    const attending = data?.filter((d) => d?.Status === "Attending")?.length;
    const declined = data?.filter((d) => d?.Status === "Declined")?.length;

    return { submissions, totalGuests, attending, declined };
  }, [data]);

  // Filter + Search
  const filteredData = useMemo(() => {
    return data.filter((d) => {
      const matchSearch = d?.Business.toLowerCase().includes(
        search.toLowerCase(),
      );

      const matchFilter = filter === "ALL" ? true : d?.Status === filter;

      return matchSearch && matchFilter;
    });
  }, [data, search, filter]);

  // View Sheet (opens the Google Sheet in a new tab)
  const viewSheet = () => {
    window.open(sheetUrl, "_blank");
  };

  return (
    <div className="db-content">
      <div className="db-topbar">
        <div className="db-topbar-left">
          <h2>📋 RSVP Dashboard</h2>
          <p>GBS 10th Anniversary · 10 July 2026</p>
        </div>
      </div>

      {/* Stats */}
      <div className="db-stats">
        <div className="db-stat">
          <div className="db-stat-num" style={{ color: "var(--navy)" }}>
            {stats.submissions}
          </div>
          <div className="db-stat-lbl">Submissions</div>
        </div>

        <div className="db-stat">
          <div className="db-stat-num" style={{ color: "var(--purple)" }}>
            {stats.totalGuests}
          </div>
          <div className="db-stat-lbl">Total Guests</div>
        </div>

        <div className="db-stat">
          <div className="db-stat-num" style={{ color: "var(--teal)" }}>
            {stats.attending}
          </div>
          <div className="db-stat-lbl">Attending</div>
        </div>

        <div className="db-stat">
          <div className="db-stat-num" style={{ color: "var(--volcano)" }}>
            {stats.declined}
          </div>
          <div className="db-stat-lbl">Declined</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="db-toolbar">
        <input
          className="db-search"
          placeholder="🔍 Search name or business..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setFilter("ALL")}
          className="flt-btn"
          style={{ color: filter === "ALL" ? "var(--navy)" : "inherit" }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Attending")}
          className="flt-btn"
          style={{ color: filter === "Attending" ? "var(--teal)" : "inherit" }}
        >
          ✅ Attending
        </button>
        <button
          onClick={() => setFilter("Declined")}
          className="flt-btn"
          style={{
            color: filter === "Declined" ? "var(--volcano)" : "inherit",
          }}
        >
          ❌ Declined
        </button>

        <button onClick={viewSheet} className="exp-btn view-btn ">
          📁 View Sheet
        </button>
      </div>

      {/* Table */}
      <div className="db-body">
        {loading ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <div className="db-empty">
            <div className="icon">📭</div>
            <p>No RSVPs found.</p>
          </div>
        ) : (
          <table className="db-table">
            <thead>
              <tr>
                <th>Business</th>
                <th>Status</th>
                <th>Guests</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d, i) => (
                <tr key={i}>
                  <td>{d?.Business}</td>
                  <td>{d?.Status}</td>
                  <td>{d?.Guests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
