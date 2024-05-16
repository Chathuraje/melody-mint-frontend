import { eth_value } from "@/utils/styledVarialbes";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface InvestmentListParams {
  id: string;
  address: string;
  amount: number;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "address", headerName: "Address", width: 250 },
  { field: "amount", headerName: "Amount", width: 130 },
];

export const InvestorsTable = ({
  investors,
}: {
  investors: InvestmentListParams[] | undefined;
}) => {
  // Generate unique IDs for each investment
  const investorsWithIds = investors?.map((investment, index) => ({
    id: index.toString(),
    address: investment.address,
    amount: `${eth_value(investment.amount)} ETH`,
  }));

  return (
    <Grid display="flex" flexDirection="column" gap="25px">
      <Typography variant="h5" color="black" fontSize="28px">
        Investors of the fund
      </Typography>
      {investors && (
        <DataGrid
          rows={investorsWithIds}
          columns={columns}
          getRowId={(row) => row.id} // Specify how to get the row ID
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          checkboxSelection
        />
      )}
      <hr />
    </Grid>
  );
};
