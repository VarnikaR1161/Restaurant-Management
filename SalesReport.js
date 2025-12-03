import React, { useEffect, useState } from "react";
import "./SalesReport.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesReport = () => {
  const [summary, setSummary] = useState({});
  const [salesChartData, setSalesChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy summary data
    const dummySummary = {
      totalSales: 87250,
      totalOrders: 120,
      topDish: "Steak",
      lowStockCount: 3,
    };

    // Dummy monthly sales data
    const dummySales = [
      { month: "January", totalSales: 12000 },
      { month: "February", totalSales: 8000 },
      { month: "March", totalSales: 9500 },
      { month: "April", totalSales: 10000 },
      { month: "May", totalSales: 11250 },
      { month: "June", totalSales: 13000 },
      { month: "July", totalSales: 13500 },
    ];

    setSummary(dummySummary);

    setSalesChartData({
      labels: dummySales.map((item) => item.month),
      datasets: [
        {
          label: "Sales (₹)",
          data: dummySales.map((item) => item.totalSales),
          backgroundColor: "#FF7043",
          borderRadius: 6,
        },
      ],
    });

    setLoading(false);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.formattedValue}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `₹${value.toLocaleString("en-IN")}`,
        },
        grid: {
          color: "#eee",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 6,
      },
    },
  };

  return (
    <div className="sales-report-container">
      <div className="summary-cards">
        <div className="card">Total Sales: ₹{summary.totalSales || 0}</div>
        <div className="card">Total Orders: {summary.totalOrders || 0}</div>
        <div className="card">Top Dish: {summary.topDish || "N/A"}</div>
        <div className="card">Low Inventory: {summary.lowStockCount || 0}</div>
      </div>

      <div className="chart-section">
        <h3>Monthly Sales Overview</h3>
        {!loading ? (
          salesChartData ? (
            <div className="chart-wrapper">
              <Bar data={salesChartData} options={chartOptions} />
            </div>
          ) : (
            <p>No sales data available to display.</p>
          )
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default SalesReport;
