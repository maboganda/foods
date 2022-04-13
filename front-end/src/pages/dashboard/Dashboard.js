import { Grid, Link, Paper } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import MiniCard from "../../components/MiniCard/MiniCard";
import LayoutA from "../../components/Layouts/LayoutA";
import Order from "../../components/Table/Order";
import { useDispatch } from "react-redux";
import { getDashboardData } from "../../redux/actionCreator";

function createData(time, amount) {
  return { x_axis: time, y_axis: amount };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return (
    <LayoutA title="Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart title="Dashboard" data={data} xAxisTitle="Sales ($)" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <MiniCard
              title="Recent Deposits"
              detail="$3,024.00"
              subDetail="on 04 April, 2022"
            >
              <div>
                <Link color="primary" href="#">
                  View Balance
                </Link>
              </div>
            </MiniCard>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Order title="Recent Orders" />
          </Paper>
        </Grid>
      </Grid>
    </LayoutA>
  );
};

export default Dashboard;
