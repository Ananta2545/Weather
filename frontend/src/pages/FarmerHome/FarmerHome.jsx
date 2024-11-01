// src/pages/FarmerHome/FarmerHome.jsx

import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget.jsx";
import "./FarmerHome.scss";
import support from '../../assets/sustainable.png';
import RevenueChart from "../../components/chart/Chart.jsx";
import { Pie } from "react-chartjs-2";
import TaskCompletionChart from '../../components/taskCompletion/TaskCompletion.jsx';
import FarmingNews from "../../components/farmingNews/FarmingNews.jsx";

const Home = () => {
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  
  const [completedTasks, setCompletedTasks] = useState(5);
  const [totalTasks, setTotalTasks] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setNotifications([
        { id: 1, message: "Weather alert: Rain expected tomorrow." },
        { id: 2, message: "Irrigation schedule updated for this week." },
      ]);
      setAppointments([
        { id: 1, date: "2024-11-05", expertName: "Dr. Ravi Patel" },
        { id: 2, date: "2024-11-12", expertName: "Dr. Anjali Sharma" },
      ]);
    };
    fetchData();
  }, []);

  const blogPosts = [
    {
      title: "Understanding Crop Rotation",
      excerpt: "Discover best practices of crop rotation...",
    },
    {
      title: "Pest Management Strategies",
      excerpt: "Learn how to manage pests effectively ...",
    },
    {
      title: "Sustainable Farming Practices",
      excerpt: "Explore sustainable ways to reduce costs...",
    },
    {
      title: "Maximizing Your Harvest",
      excerpt: "Tips to ensure a bountiful harvest season...",
    },
  ];

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="widgetsSection">
          <div className="heading">
            <img src={support} width={30} height={30} alt="" />
            <h2 className="widgetsHeading">What Experts Have to Say Today</h2>
          </div>
          
          <div className="widgetsContainer">
            {blogPosts.map((post, index) => (
              <Widget key={index} title={post.title} excerpt={post.excerpt} />
            ))}
          </div>
        </div>
        
        <div className="notifications-appointments">
          <section className="notifications">
            <h2>Notifications</h2>
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id}>{notification.message}</li>
              ))}
            </ul>
          </section>
          
          <section className="appointments">
            <h2>Upcoming Appointments</h2>
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  {appointment.date} - {appointment.expertName}
                </li>
              ))}
            </ul>
          </section>
        </div>
        
        <div className="chartSection">
          <RevenueChart />
          <TaskCompletionChart completed={completedTasks} total={totalTasks} />
        </div>
        <div className="news">
          <FarmingNews/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
