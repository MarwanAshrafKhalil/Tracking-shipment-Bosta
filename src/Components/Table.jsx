import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "tailwindcss/tailwind.css";

export default function BasicTable({ rows, ...props }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow className=" bg-gray-100">
            <TableCell style={{ fontWeight: "bold", color: " gray" }}>
              Location
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", color: " gray" }}
              align="left"
            >
              Date
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", color: " gray" }}
              align="left"
            >
              Time
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", color: " gray" }}
              align="left"
            >
              Details&nbsp;
            </TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Location}
              </TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.Time}</TableCell>
              <TableCell align="left">{row.Details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
