import { ReactElement, Fragment } from "react";
import { rows } from "./BooksData";
import { PieChart } from "@mui/x-charts";
import Title from "../utility/Title";

const listGenres = [
  { id: 0, value: 0, label: "Thriller" },
  { id: 1, value: 0, label: "Narrativa" },
  { id: 2, value: 0, label: "Sci-Fi" },
  { id: 3, value: 0, label: "Saggistica" },
  { id: 4, value: 0, label: "Fantasy" },
];

function updateList(): void {
  for (const g of listGenres) {
    g.value = 0;
    g.value += rows.filter((r) => r.genre === g.label).length;
  }
}

export default function BooksChart(): ReactElement {
  updateList();
  return (
    <Fragment>
      <Title>Pie chart of genres</Title>
      <PieChart
        series={[
          {
            data: listGenres,
          },
        ]}
        width={400}
        height={200}
      />
    </Fragment>
  );
}
