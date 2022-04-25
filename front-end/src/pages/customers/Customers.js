import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import LayoutA from "../../components/Layouts/LayoutA";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getCustomersData } from "../../redux/actionCreator";
import { isEmptyObj } from '../../components/Utils/utils'

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  {
    field: "mobile_number",
    headerName: "Mobile number",
    sortable: false,
    width: 150,
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.adminData);
  const { data, setData } = useState({
    rows: [],
    rowsCount: 0,
    page: 0,
    per_page: 0
  });

  useEffect(() => {
    dispatch(getCustomersData())
  }, [dispatch]);

  useEffect(() => {
    if (!isEmptyObj(collection)) {
      setData((prevState) => ({
        ...prevState,
        rows: collection.data,
        rowCount: collection.meta.total,
        page: collection.meta.page,
        per_page: collection.meta.per_page
      }))
    }
  }, [collection])

  return (
    <LayoutA title="Customers">
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 450,
              width: "100%",
            }}
          >
            <DataGrid
              pagination
              // paginationMode="server"
              columns={columns}
              rows={[]}
              rowCount={0}
              rowsPerPageOptions={[5, 10]}
              page={0}
              pageSize={10}
              checkboxSelection
              disableSelectionOnClick
            />
          </Paper>
        </Grid>
      </Grid>
    </LayoutA>
  );
};

export default Customers;
